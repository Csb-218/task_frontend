import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp } from './Routes/Authentication';
import Dashboard from './Routes/AllTasks';
import Home from './Routes/Home';


function App() {

  const queryClient = new QueryClient()

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
            <Route index element={<Dashboard/>} />
            
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />

        </Routes>


      </QueryClientProvider>
    </>
  );
}

export default App;
