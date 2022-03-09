import styled from "styled-components";
import titleFont from "../fonts/eczar.ttf";
import Slider from "react-slick";
import ImgStore from "./ImgStore";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const ProjectsBox = styled.div`
        width: 800px;
        background-color: transparent;
        border-radius: 6px;
        text-align: center;
        @media (max-width: 760px) {
            overflow: hidden;
            padding-bottom: 20px;
        }
    `;
    return (
        <ProjectsBox>
            <Title mainText={'Projetos Recentes'} />
            <SimpleSlider />
        </ProjectsBox>
    );
}

const Title = ( { mainText } ) => {
    const StyledTitle = styled.h1`
        @font-face {
            font-family: 'Eczar';
            src: url(${titleFont});
        }
        font-family: 'Eczar';
        color: #fff;
        margin-bottom: 10px;
        letter-spacing: 1px;
        @media (max-width: 500px) {
            font-size: 1.8rem;
        }
    `;
    return (
        <StyledTitle> { mainText } </StyledTitle>
    );
}

const SimpleSlider = () => {
    const settings = {
      dots: true,
      speed: 750,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      adaptiveHeight: true,
    };
    
    const Name = styled.h2`
        font-family: 'Eczar';
        margin-bottom: 20px;
        color: #fff;
        text-shadow: 2px 2px 4px rgb(0,0,0,0.3);
        letter-spacing: .5px;
        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    `;
    const Image = styled.img`
        margin: auto;
        border-radius: 6px;
        box-shadow: 3px 3px 8px rgb(0,0,0,0.2);
        margin-bottom: 8px;
        cursor: pointer;
        @media (max-width: 500px) {
            width: 90%;
            margin-bottom: 16px;
        }
    `;
    return (
    <Slider {...settings}>
        {
        ImgStore.map(el => {
            return (
            <div>
                <Name>
                    { el.name }
                </Name>
                <a href={ el.link } target="_blank" rel="noreferrer">
                    <Image 
                        src={ el.url }
                        alt={ el.name } 
                    />
                </a>
            </div>
            )
        })
        }
    </Slider>
    );
}
  
export default Projects;