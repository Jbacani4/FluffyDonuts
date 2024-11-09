import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';
import { slides } from "../assets/data";
import LanguageContext from "../components/LanguageContext";

const About = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const { language } = useContext(LanguageContext);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 7000); // Change slides every 5 seconds
  
      return () => clearInterval(interval);
    }, []);

    return (
      <SectionContainer>
        <AnimatePresence>
          <Slide
            key={currentSlide}
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 1 }}
            bgImage={ isMobile ? slides[currentSlide].mobileImage : slides[currentSlide].image }
            width={isMobile ? "100%" : "70vw"}
            left={isMobile ? "0" : "15vw"}
          >
            <Overlay />
            <TextContainer width={isMobile ? "90%" : "55vw"}>
              <Text fontSize={isMobile ? "2rem" : "3rem"}>{slides[currentSlide][language]}</Text>
            </TextContainer>
          </Slide>
        </AnimatePresence>
      </SectionContainer>
    );
  };
  

const SectionContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const Slide = styled(motion.div)`
    position: absolute;
    top: 0;
    width: ${(props) => props.width};
    margin: 0 auto;
    height: 100vh;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    left: ${(props) => props.left};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    overflow: hidden;
`;

const Overlay = styled.div` /* 50% shadow overlay */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1;
`;

const TextContainer = styled.div`
    position: absolute;
    z-index: 2;
    top: 25%;
    display: flex;
    width: ${(props) => props.width};
    align-items: center;
    justify-content: space-around;
`;

const Text = styled.h2`
    color: white;
    font-size: ${(props) => props.fontSize};
    font-weight: 500;
    max-width: 80%;
`;

export default About;

