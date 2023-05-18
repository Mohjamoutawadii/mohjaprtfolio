import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../components/FullLayout.js"));

const Home = lazy(() => import("../components/Home.js"));

const ThemeRoutes = [
    {
        path:"/",
        element: <FullLayout />,
        chlidren: [
            { path:"/", element: <Navigate to="/home" /> },
            { path:"/home", exact: true, element: <Home /> },
        ],
    },
];

export default ThemeRoutes;
