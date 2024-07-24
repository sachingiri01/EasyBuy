import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/login";
import Forgotpassword from "../pages/Forgotpassword"
import Signup from "../pages/Signup";
import Admin_penal from "../pages/Admin_penal";
import All_user from "../pages/All_user";
import All_product from "../pages/All_product";
import CategoryProduct from "../pages/CategoryProduct";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
         {
          path:'/',
          element:<Home/>
         },
         {
          path:"login",
          element:<Login/>
         },
         {
             path:'forgot-password',
             element:<Forgotpassword/>
         },
         {
          path:'sign-up',
          element:<Signup/>
         },
         {
           path:'category-product/:category',
           element:<CategoryProduct/>
         } ,{
          path:'admin-penal',
          element:<Admin_penal/>,
          children:[
            {
               path:"all-users",
               element:<All_user/>
            },
            {
              path:"all-products",
              element:<All_product/>

            }
          ]
         }
      ]
    },

  ]);
  export default router;