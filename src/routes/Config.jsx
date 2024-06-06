import { Layout } from "../components/Shared";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookDetailPage from "../pages/BookDetailPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ThankYouPage from "../pages/ThankYouPage";
import SignupPage from "../pages/SignupPage";
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
        element: <Layout><CheckoutPage /></Layout>
    },
    {
        path: '/thank-you',
        element: <ThankYouPage />
    }
]

export {
    publicRoutes,
    protectedRoutes
}