import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home/Home";
import Menu from "../Component/Pages/Menu/Menu";
import Order from "../Component/Pages/Order/Order/Order";
import Login from "../Component/Pages/Login/Login";
import SignUp from "../Component/Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/order/:category',
            element: <Order></Order>
        },
        {
            path: '/order',
            element: <Order></Order>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
       
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
       
      ]
    },
  ]);