import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="https://joaomarcossb.github.io/my-profile/" element={ <Home /> } />
            <Route path="https://joaomarcossb.github.io/my-profile/about" element={ <About /> } />
            <Route path="https://joaomarcossb.github.io/my-profile/projects" element={ <Projects /> } />
            <Route path="https://joaomarcossb.github.io/my-profile/contact" element={ <Contact /> } />
        </Routes>
    );
}

export default MainRoutes;