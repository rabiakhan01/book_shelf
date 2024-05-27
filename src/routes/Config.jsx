import { Layout } from "../components/Shared";
import Cart from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ShippingPage from "../pages/ShippingPage";
import LoginPage from "../pages/LoginPage";
import AllBooksPage from "../pages/AllBooksPage";
import AllAuthorPage from "../pages/AllAuthorsPage";
import BookDetailPage from "../pages/BookDetailPage";
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
        path: '/book-detail',
        element: <Layout><BookDetailPage /></Layout>
    },
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