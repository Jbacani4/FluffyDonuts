import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { HiArrowLongDown } from "react-icons/hi2";

import FluffyDonutsFullLogo from "./assets/FluffyDonutsFullLogo.png";
import FluffyDonutsName from "./assets/FluffyDonutsTitle.png";
import igIcon from "./assets/igIcon.png";


const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>

      <FluffyLogo id="homeLogo" className="scale-in-second" src={isMobile ? FluffyDonutsFullLogo : FluffyDonutsName} />
      <Tagline
        width={isMobile ? "55%" : "auto"}>
        PLANT-BASED, COFFEE, DONUTS {isMobile && <br />}& GOOD VIBES
      </Tagline>
      {!isMobile && (
        <IgLink className="scale-in-second"
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
`;

const Tagline = styled.p`
  width: ${(props) => props.width};
  font-size: 1.25em;
  text-align: center;
  margin: 1em 0;
  letter-spacing: 0.1rem;
// color-gradient backround animation
  background: linear-gradient(270deg, #da8694, #fde9de, #beebd6, #80cbb3, #ffffff);
  background-size: 1000% 1000%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: bg-color 3s ease 2s 1;
  -moz-animation: bg-color 3s ease 2s 1;
  animation: bg-color 3s ease 2s 1, fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
`;

const IgLink = styled.a`
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
  height: 32px;
  opacity: 0;

  /* border: 1px solid fuchsia; */

  -webkit-animation: fade-in 3s linear 3s both;
  -moz-animation:fade-in 3s linear 3s both;
  animation: fade-in 3s linear 3s both;
`;
