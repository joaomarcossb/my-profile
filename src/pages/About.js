import styled from 'styled-components';

const About = () => {
    const AboutBox = styled.div`
        width: 300px;
        background-color: white;
        text-align: center;
    `
    return (
        <AboutBox>
            <h1>About Section</h1>
        </AboutBox>
    );
}

export default About;