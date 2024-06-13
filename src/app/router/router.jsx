import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../pages/HomePage/HomePage";
import ProfilePage from "../../pages/Profile/ProfilePage";


export const router = createBrowserRouter([
    {
        path:"/profile",
        element:<ProfilePage/>
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