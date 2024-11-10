import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import LanguageContext from "../components/LanguageContext";


import { HiArrowLongDown } from "react-icons/hi2";

import FluffyDonutsFullLogo from "../assets/fd_fullLogo.png";
import FluffyDonutsName from "../assets/fd_title.png";
import igIcon from "../assets/igIcon.png";


const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext)
  
  const {tagline} = texts[language] 

  return (
    <Container>

      <FluffyLogo id="homeLogo" className="scale-fluffy" src={isMobile ? FluffyDonutsFullLogo : FluffyDonutsName} />
      <Tagline
        width={isMobile ? "55%" : "auto"}>
        {tagline}
      </Tagline>
      {!isMobile && (
        <IgLink className="scale-fluffy"
          href="https://www.instagram.com/fluffydonutsmtl/"
          target="blank"
        >
          <img src={igIcon} alt="igIcon" />
        </IgLink>
      )}

      <Arrow
        align={isMobile ? "center" : "flex-end"}
        padding={isMobile ? "0" : "3.5rem"}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FluffyLogo = styled.img`
  width: 65vw;
  max-width: 70vw;
  margin-top: 8vh;

  animation: scale-fluffy 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both;
  -webkit-animation: scale-fluffy 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both;
`;

const Tagline = styled.p`
  width: ${(props) => props.width};
  font-size: 1.25em;
  text-align: center;
  margin: 1em 0;
  letter-spacing: 0.1rem;
// color-gradient backround animation
  background: linear-gradient(270deg, var(--lightPink), var(--lightGreen), white);
  background-size: 1000% 1000%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: bg-color 3s ease 1.5s 1, fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s 1 both;
  -webkit-animation: bg-color 3s ease 1.5s 1, fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s 1 both;
  -moz-animation: bg-color 3s ease 1.5s 1, fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s 1 both;
`;

const IgLink = styled.a`
  animation: scale-fluffy 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s 1 both;
  -webkit-animation: scale-fluffy 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s 1 both;
  cursor: pointer;

  img {
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.3s;
    }
  }
`;


const Arrow = styled(HiArrowLongDown)`
  align-self: ${(props) => props.align};
  padding-right: ${(props) => props.padding};
  font-size: 1.5rem;

  -webkit-animation: fade-in 3s linear 3s both;
  -moz-animation:fade-in 3s linear 3s both;
  animation: fade-in 3s linear 3s both;
`;
