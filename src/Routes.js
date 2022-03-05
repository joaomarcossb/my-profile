import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/contact" element={ <Contact /> } />
        </Routes>
    );
}

export default MainRoutes;