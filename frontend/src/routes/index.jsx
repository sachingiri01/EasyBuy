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
import Productdetails from "../pages/Productdetails";
import CartProductView from "../pages/CartProductView";
import SearchPage from "../pages/SearchPage";
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
          path:"cartproducts",
          element:<CartProductView/>
         },
         {
             path:'forgot-password',
             element:<Forgotpassword/>
         },{
            path:"Product-Details/:category/:_id",
            element:<Productdetails/>
         },
         {
          path:'sign-up',
          element:<Signup/>
         },
         {
           path:'search',
           element:<SearchPage/>
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