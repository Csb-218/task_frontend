import {useEffect} from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp } from './Routes/Authentication';
import Home from './Routes/Home';
import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { sendTokenToServer } from './services/service';


const firebaseConfig = {
  apiKey: "AIzaSyAxNERRZMkaumLO9wauUwkKpFjaz3i5EQo",
  authDomain: "tasker-c0002.firebaseapp.com",
  projectId: "tasker-c0002",
  storageBucket: "tasker-c0002.appspot.com",
  messagingSenderId: "184138483121",
  appId: "1:184138483121:web:9aea18505bd957c3f32990",
  measurementId: "G-3HWZ653PZ9"
};

function App() {

  const queryClient = new QueryClient()

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const messaging = getMessaging(app);

 
  

function requestPermission() {
    console.log('Requesting permission...');

    Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {

        console.log('Notification permission granted.');
        console.log(`${process.env.REACT_APP_VAPID_KEY}`)

        getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY }).then((currentToken) => {

          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            console.log(currentToken)
            sendTokenToServer(currentToken)
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
             <Home/>
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

export default App;
