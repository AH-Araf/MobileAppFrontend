import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Sell from "./Sell";
import FilterName from "./FilterName";
import SingleDetails from "./SingleDetails";
import FilterDate from "./FilterDate";
import UpdateProducts from "./UpdateProducts";
import UpdateCustomer from "./UpdateCustomer";
import PostProduct from "./PostProduct";
import UpdateP from "./UpdateP";
import UMainProduct from "./UMainProduct";

export const routes = createBrowserRouter([
{
    path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b-app-server.vercel.app/appUsers'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/sell',
                element:<Sell></Sell>
            },
            {
                path: '/filterByName',
                element:<FilterName></FilterName>,
                loader: () => fetch('https://b-app-server.vercel.app/customerInfo'),
            },
            {
                path: '/filterByDate',
                element:<FilterDate></FilterDate>,
                loader: () => fetch('https://b-app-server.vercel.app/customerInfo'),
            },
            {
                path: '/singleDetails/:id',
                element: <SingleDetails></SingleDetails>,
                loader: async ({params}) =>  fetch(`https://b-app-server.vercel.app/singleDetails/${params.id}`)
            },
            
            {
                path: '/update',
                element:<UpdateProducts></UpdateProducts>,
                loader: () => fetch('https://b-app-server.vercel.app/productInfo'),
            },

            {
                path: '/updateCustomer/:id',
                element:<UpdateCustomer></UpdateCustomer>,  
                loader: async ({params}) =>  fetch(`https://b-app-server.vercel.app/singleDetails/${params.id}`)
            },
            {
                path: '/postProduct',
                element:<PostProduct></PostProduct>, 
            },
            {
                path: '/pInfo',
                element:<UpdateP></UpdateP>,
                loader: () => fetch('https://b-app-server.vercel.app/productInfo'),
            },
            {
                path: '/updateProduct/:id',
                element:<UMainProduct></UMainProduct>,  
                loader: async ({params}) =>  fetch(`https://b-app-server.vercel.app/updateProduct/${params.id}`)
            },
        ]
        }          
])