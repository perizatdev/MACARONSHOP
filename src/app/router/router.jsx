import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../pages/HomePage/HomePage";
import ProfilePage from "../../pages/Profile/ProfilePage";
import Register from "../../features/Register/ui/Register";
import Login from "../../features/Login/ui/Login";


export const router = createBrowserRouter([
    {
        path:"/profile",
        element:<ProfilePage/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>

    },
    
    {
    path:"/",
    element:<Layout/>,
    errorElement:<NotFound/>,
    children:[
        {
            path: '/',
            element: <HomePage/>
        },        
    ]
}])