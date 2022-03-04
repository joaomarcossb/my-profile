import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Routes from "./Routes";
import Navbar from "./pages/Navbar";
import fontURL from "./fonts/work-sans.ttf";

const App = () => {
  const AppBox = styled.div`
    @font-face {
      font-family: 'Work Sans';
      src: url(${fontURL});
    }
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom, #2cd9d0, #20b2aa);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
  `
  return (
    <BrowserRouter>
      <AppBox>
        <Navbar />
        <Routes />
      </AppBox>
    </BrowserRouter>
  );
}

export default App;