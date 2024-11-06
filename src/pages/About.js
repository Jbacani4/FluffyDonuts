import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';

import slides from "../assets/slides";

// import coffee from "../../src/assets/coffee.jpg";
// import community from "../../src/assets/community.jpg";
// import donut from "../../src/assets/donut.jpg";

// const slides = [
//     {
//       image: coffee,
//       text: 'Coffee is more than just a drink — it’s an art form. As a 3rd Wave café, each bean is ethically sourced and each cup is crafted with care for an elevated experience.'
//     },
//     {
//       image: donut,
//       text: 'Our deliciously fluffy,  100% plant-based doughnuts are made fresh daily from scratch, with love and using only natural, organic ingredients.'
//     },
//     {
//       image: community,
//       text: 'From eco-friendly practices to local partnerships, we’re committed to creating a sustainable future and building a connected community.'
//     }
//   ];

const About = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // Change slides every 5 seconds
  
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
            transition={{ duration: 0.7 }}
            bgImage={ isMobile ? slides[currentSlide].mobileImage : slides[currentSlide].image }
            width={isMobile ? "100%" : "70vw"}
            left={isMobile ? "0" : "15vw"}
          >
            <Overlay />
            <TextContainer width={isMobile ? "90%" : "55vw"}>
              <Text fontSize={isMobile ? "2rem" : "3rem"}>{slides[currentSlide].text}</Text>
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
    /* width: 70vw; */
    margin: 0 auto;
    height: 100vh;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    /* background-position: 20% 50%; */
    /* background-position: center; */
    left: ${(props) => props.left};
    /* left: 15vw; */
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
    /* width: 55vw; */
    align-items: center;
    justify-content: space-around;

    /* border: 2px solid fuchsia; */
`;

const Text = styled.h2`
    color: white;
    font-size: ${(props) => props.fontSize};
    /* font-size: 3rem; */
    font-weight: 500;
    max-width: 80%;
`;

export default About;

