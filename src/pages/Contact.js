import styled from "styled-components";
import { FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import fontURL from "../fonts/eczar.ttf";

const Contact = () => {
    const ContactBox = styled.div`
        width: 800px;
        text-align: center;
        @font-face {
            font-family: 'Eczar';
            src: url(${fontURL});
        }
        h1 {
            font-family: 'Eczar';
            color: white;
            text-shadow: 2px 2px 4px rgb(0,0,0,0.3);
            letter-spacing: 1px;
            margin-bottom: 40px;
        }
        ul {
            width: 100%;
            list-style-type: none;
            display: inline-flex;
            justify-content: space-evenly;
            li {
                font-size: 3rem;
                a {
                    text-decoration: none;
                    color: #FFF;
                }
                a:hover {
                    color: rgb(0,0,0,0.8);
                }
            }
        }
    `
    return (
        <ContactBox>
            <h1>Fale comigo:</h1>
            <ul>
                <li><a href="https://github.com/joaomarcossb" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li><a href="https://linkedin.com/in/joaomarcossb" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                <li><a href="https://wa.me/5571999768309" target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
                <li><a href="mailto:joaomarcossb@outlook.com?subject=Olá, João!" target="_blank" rel="noreferrer"><FaMailBulk /></a></li>
            </ul>
        </ContactBox>
    );
}

export default Contact;