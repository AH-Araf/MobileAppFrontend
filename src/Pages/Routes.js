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

export const routes = createBrowserRouter([
{
    path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/appUsers'),
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
                loader: () => fetch('http://localhost:5000/customerInfo'),
            },
            {
                path: '/filterByDate',
                element:<FilterDate></FilterDate>,
                loader: () => fetch('http://localhost:5000/customerInfo'),
            },
            {
                path: '/singleDetails/:id',
                element: <SingleDetails></SingleDetails>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/singleDetails/${params.id}`)
            },
            {
                path: '/update',
                element:<UpdateProducts></UpdateProducts>,
                loader: () => fetch('http://localhost:5000/customerInfo'),
            },
        ]
        }          
])