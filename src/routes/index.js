import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { publicRoutes, protectedRoutes } from './Config'
import HomePage from "../pages/HomePage";
import AllBooksPage from "../pages/AllBooksPage";
import BookDetailPage from "../pages/BookDetailPage";
import { Layout } from "../components/Shared";
import CartPage from "../pages/CartPage";
import AllAuthorPage from "../pages/AllAuthorsPage";
import BookMarkPage from "../pages/BookMarkPage";
import RedirectPage from "../pages/RedirectPage";


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/all-books" element={<Layout><AllBooksPage /></Layout>} />
            <Route path="all-books/book-detail/:bookId" element={<Layout><BookDetailPage /></Layout>} />
            <Route path='/cart' element=<Layout><CartPage /></Layout> />
            <Route path='/all-authors' element=<Layout><AllAuthorPage /></Layout> />
            <Route path='/bookmark' element=<Layout><BookMarkPage /></Layout> />
            <Route path="*" element=<RedirectPage /> />
            <Route element={<PublicRoutes />}>
                {
                    publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Route>
            <Route element={<ProtectedRoutes />}>
                {
                    protectedRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Route>
        </Routes>
    );
}

export default Routing;