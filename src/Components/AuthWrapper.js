import { withCookies,useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';


const AuthWrapper = ({children}) => {

    const [cookies] = useCookies(['credential']);
    const {credential} = cookies


    return(
        credential ?

        children
        :

        <Navigate to='/login' replace={true}/>
    )
  
}

export default AuthWrapper