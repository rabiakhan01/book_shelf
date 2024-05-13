import { Layout } from "../components/Shared";
import Cart from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ShippingPage from "../pages/ShippingPage";
import Signup from "../pages/Signup";

//public routes
const publicRoutes = [
    {
        path: '/',
        element: <Layout><HomePage /></Layout>
    },
    {
        path: '/signup',
        element: <Layout><Signup /></Layout>
    }
];

//protected routes
const protectedRoutes = [
    {
        path: '/cart',
        element: <Layout><Cart /></Layout>
    },
    {
        path: '/shipping',
        element: <Layout><ShippingPage /></Layout>
    }
]

export {
    publicRoutes,
    protectedRoutes
}