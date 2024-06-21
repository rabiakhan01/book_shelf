import { Layout } from "../components/Shared";
import LoginPage from "../pages/LoginPage";
import CheckoutPage from "../pages/CheckoutPage";
import ThankYouPage from "../pages/ThankYouPage";
import SignupPage from "../pages/SignupPage";
import UserProfile from "../pages/UserProfile";
//public routes
const publicRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignupPage />
    },


];

//protected routes
const protectedRoutes = [

    {
        path: '/checkout',
        element: <CheckoutPage />
    },
    {
        path: '/thank-you',
        element: <ThankYouPage />
    },
    {
        path: '/profile',
        element: <Layout><UserProfile /></Layout>
    },
]

export {
    publicRoutes,
    protectedRoutes
}