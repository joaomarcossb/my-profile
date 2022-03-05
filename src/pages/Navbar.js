import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const Navigate = useNavigate();
    const List = styled.ul`
        height: 12vh;
        width: 100vw;
        position: absolute;
        top: 0px;
        background-color: transparent;
        display: flex;
        align-items: center;
        list-style-type: none;
        li {
            color: white;
            font-weight: bold;
            letter-spacing: 2px;
            margin-left: 4vw;
            cursor: pointer;
        }
        li:hover {
            color: rgb(0,0,0,0.8);
        }
    `

    return (
        <List>
            <li onClick={()=>{ Navigate('/') }}>&#128204; Início</li>
            <li onClick={()=>{ Navigate('/projects') }}>&#128188; Projetos</li>
            <li onClick={()=>{ Navigate('/about') }}>&#128220; Sobre</li>
            <li onClick={()=>{ Navigate('/contact') }}>&#128233; Contato</li>
        </List>
    );
}

export default Navbar;