import {useEffect} from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp } from './Routes/Authentication';
import Home from './Routes/Home';
import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { sendTokenToServer } from './services/service';
import { useDispatch } from 'react-redux';
import { firebaseConfig } from './utils/Helpers';
import { jwtDecode } from "jwt-decode";
import { AuthActions } from './store/AuthSlice';
import AuthWrapper from './Components/AuthWrapper';
import { withCookies,useCookies } from 'react-cookie';


function App() {

  const [cookies] = useCookies(['credential']);
  const dispatch = useDispatch()

  const queryClient = new QueryClient()
 
  const app = initializeApp(firebaseConfig);

  const messaging = getMessaging(app);
 
function requestPermission() {

    console.log('Requesting permission...');

    Notification.requestPermission()
    .then((permission) => {

      if (permission === 'granted') {

        console.log('Notification permission granted.');
        // console.log(`${process.env.REACT_APP_VAPID_KEY}`)

        getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY }).then((currentToken) => {

          if (currentToken) { 
            // Send the token to your server and update the UI if necessary
            console.log(currentToken)
            sendTokenToServer(currentToken,cookies?.credential)
            .then(res => console.log('token successfully sent to server',res))
            .catch(err => console.error(err))

          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });

      }
      else{
        console.log('Notification not granted')
      }
    })
  }

  useEffect(()=>{

    console.log(cookies)

    if(cookies?.credential){

      console.log(cookies.credential)

      const decoded = cookies?.credential && jwtDecode(cookies?.credential)
      const {email,name,picture} = decoded

      // console.log(email,name)

      const user = {
        name :name,
        email:email,
        picture:picture,
        credential:cookies.credential
      }

      dispatch(AuthActions.login(user))
    }

  },[cookies,dispatch])
  


  useEffect(()=>{

    const permission = Notification.permission

    if(permission !== 'granted'){
     
      requestPermission()
    }

  },[])



  return (
    <>
      <QueryClientProvider client={queryClient}>

        <Routes>

          <Route 
            path='/' 
            element={
             <AuthWrapper>
              <Home/>
             </AuthWrapper>
            }
          >
            
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />

        </Routes>

      </QueryClientProvider>
    </>
  );
}

export default withCookies(App);
