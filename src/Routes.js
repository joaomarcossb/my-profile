import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/works" element={ <Works /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
    );
}

export default MainRoutes;