import { Layout } from "../components/Shared";
import Cart from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ShippingPage from "../pages/ShippingPage";
import LoginPage from "../pages/LoginPage";
import AllBooksPage from "../pages/AllBooksPage";
import BookDetailPage from "../pages/BookDetailPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import CheckoutPage from "../pages/CheckoutPage";
import ThankYouPage from "../pages/ThankYouPage";
//public routes
const publicRoutes = [
    {
        path: '/',
        element: <Layout><HomePage /></Layout>
    },
    {
        path: '/all-books',
        element: <Layout><AllBooksPage /></Layout>
    },
    {
        path: '/login',
        element: <Layout><LoginPage /></Layout>
    },
    {
        path: 'all-books/book-detail/:bookId',
        element: <Layout><BookDetailPage /></Layout>
    },
    {
        path: '/cart',
        element: <Layout><CartPage /></Layout>
    },

];

//protected routes
const protectedRoutes = [

    {
        path: '/contact',
        element: <Layout><ContactPage /></Layout>
    },
    {
        path: '/shipping',
        element: <Layout><ShippingPage /></Layout>
    },
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