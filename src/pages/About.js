import styled from "styled-components";
import fontURL from "../fonts/eczar.ttf";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import reactIcon from "../images/react.png";
import nodeIcon from "../images/node.png";
import phpIcon from "../images/php.png";
import mysqlIcon from "../images/mysql.png";
import apiIcon from "../images/api.png";
import bootIcon from "../images/bootstrap.png";
import sassIcon from "../images/sass.png";

const About = () => {
    const AboutBox = styled.div`
        @font-face {
            font-family: 'Eczar';
            src: url(${fontURL});
        }
        color: white;
        width: 800px;
        background-color: transparent;
        /*border: solid 2px white;*/
        border-radius: 8px;
        padding: 20px 20px 25px 20px;
        text-shadow: 2px 2px 4px rgb(0,0,0,0.3);
        letter-spacing: .5px;
        font-family: 'Eczar';
        h1 {
            text-align: center;
            letter-spacing: 1px;
        }
        h2 {
            /*font-family: 'Eczar';*/
            text-align: center;
            font-size: 1.2rem;
            margin-bottom: 40px;
        }
        ul {
            list-style-type: none;
            li {
                margin-bottom: 20px;
                display: flex;
                justify-content: start;
                align-items: center;
                font-size: 1.1rem;
            }
        }
        img {
            height: 25px;
            width: 25px;
            margin-right: 5px;
        }
    `
    const Lists = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    `
    return (
        <AboutBox>
            <h1>Tecnologias</h1>
            <h2>Algumas das linguagens, bibliotecas e frameworks que utilizo:</h2>
            <Lists>
                <ul>
                    <li><img alt="logo" src={htmlIcon}></img>HTML5</li>
                    <li><img alt="logo" src={cssIcon}></img>CSS3</li>
                    <li><img alt="logo" src={jsIcon}></img>Javascript</li>
                    <li><img alt="logo" src={reactIcon}></img>React.js</li>
                    <li><img alt="logo" src={nodeIcon}></img>Node.js</li>
                </ul>
                <ul>
                    <li><img alt="logo" src={phpIcon}></img>PHP</li>
                    <li><img alt="logo" src={mysqlIcon}></img>MySQL</li>
                    <li><img alt="logo" src={apiIcon}></img>API Rest</li>
                    <li><img alt="logo" src={bootIcon}></img>Bootstrap</li>
                    <li><img alt="logo" src={sassIcon}></img>SASS</li>
                </ul>
            </Lists>
        </AboutBox>
    );
}

export default About;