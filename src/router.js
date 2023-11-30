import {createBrowserRouter} from "react-router-dom";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Home from "./pages/home";
import Login from "./pages/login";
import Terms from "./pages/terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/faq",
        element: <FAQ/>
    },
    {
        path: "/terms",
        element: <Terms/>
    },
]);

export default router;
