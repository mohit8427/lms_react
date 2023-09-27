import { useRoutes,useLocation,useNavigate } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { useEffect } from 'react';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  let location = useLocation();
  const navigate = useNavigate();
  
  const userAuth = ()=>{
    const authList = ["dashboard","user-management/users"] // authenticated urls.
    const userisAuth = true // check user is authenticate or not.
    const auth = authList.filter((authPathUrl)=> `/${authPathUrl}` == location.pathname).length > 0 && userisAuth ?true:false
    // if user is not auth then redirect to login page.
    if(!auth){
      navigate("/") // add login page url.
    }
  }

  // after every click it will function will call activated.
  useEffect(()=>{
    userAuth()
  },[location])

  return useRoutes([MainRoutes, AuthenticationRoutes]);
}
