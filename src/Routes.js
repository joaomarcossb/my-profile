import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
    );
}

export default MainRoutes;