import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import FluffyDonutsFullLogo from "../assets/fd_fullLogo.png";
import igIcon from "../assets/igIcon.png";

import LanguageContext from "../components/LanguageContext";

const Contact = () => { // TODO refactor *** smaller font/ more padding? for FR ***
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { language, texts } = useContext(LanguageContext)
  const {contact} = texts[language]


  return (
    <>
      <FlexContainer fontSize={isMobile ? "1.25rem" : "30px"}>
        <div>
          <SpanDiv> 
            <ColoredSpan color="#BEEBD6">{contact[0]}: </ColoredSpan>
            {isMobile && <br />}
            <ColoredSpan>L à D, 8h à 17h</ColoredSpan>
          </SpanDiv>
          <SpanDiv>
            <ColoredSpan color="#FDE9DE">{contact[1]}: </ColoredSpan>
            {isMobile && <br />}
            <ColoredSpan>123 PLACEHOLDER STREET</ColoredSpan>
          </SpanDiv>
          <SpanDiv>
            <ColoredSpan color="#DA8694">{contact[2]}: </ColoredSpan>
            {isMobile && <br />}
            <ColoredSpan>FLUFFYDONUTS@GMAIL.COM</ColoredSpan>
          </SpanDiv>
          <SpanDiv>
            <ColoredSpan color="#80CBB3">{contact[3]}: </ColoredSpan>
            {isMobile && <br />}
            <ColoredSpan>514-514-5514</ColoredSpan>
          </SpanDiv>

          <IgDiv justify={isMobile && "center"} top={isMobile && "64px"}>
            <IgLink
              href="https://www.instagram.com/fluffydonutsmtl/"
              target="blank"
            >
              <img src={igIcon} alt="igIcon" height={isMobile && "40px"} />
            </IgLink>
          </IgDiv>
        </div>

        {!isMobile && 
          <div>
            <FluffyLogo src={FluffyDonutsFullLogo} alt="FluffyDonutsLogo" />
          </div>
        }
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  font-size: ${(props) => props.fontSize};
`;

const ColoredSpan = styled.span`
  color: ${(props) => props.color};
`;

const SpanDiv = styled.div`
  margin-bottom: 30px;
`;

const IgDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.top};
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

const FluffyLogo = styled.img`
  width: 500px;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
`;

export default Contact;
