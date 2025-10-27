import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/homeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                Component: Home
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayouts></AuthLayouts>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/news-details/:id",
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("/news.json"),
    },
    {
        path: "/*",
        element: <h2>Error</h2>
    },
]);

export default router;