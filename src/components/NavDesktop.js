import styled from "styled-components";

import { useContext, useEffect } from "react";
import { colors } from "../assets/data";
import MmDonut from "../assets/mm_donut.PNG";
import LanguageContext from "./LanguageContext";

const NavDesktop = () => {

    useEffect(()=> {
        
        const welcomeOUT = setTimeout(()=> {
            document.getElementById("welcome").style.display = "none"
            document.getElementById("links").style.display = "flex"
        }, 3000)
        
        return () => {
            clearTimeout(welcomeOUT)
        }
    }, [])

    const { language, texts, toggleLanguage } = useContext(LanguageContext)
    const {greeting, nav} = texts[language] 

    return (
        <Container>
            <Welcome id="welcome" className={"scale-welcome"}>
                <Donut src={MmDonut}/>
                <Text>{greeting} 👋</Text>
            </Welcome>

            <Links id="links">
                {nav.map((link, i) => {
                    
                    const color = colors[i]
                    const href = `#section-${i}`
                    const isLanguageLink = i === 3
                    
                    return (

                        <DesktopLink hoverColor={color}>
                            
                            <a key={`navLink-${link}`} href={href}  onClick={isLanguageLink ? toggleLanguage : null}>{link}</a>
                            
                        </DesktopLink>
                    )
                })}
            </Links>
        </Container>
    );
};

export default NavDesktop;

const Container = styled.div`
    width: 100%;
    height: 20vh;
    margin-bottom: -16vh;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.3) 93%, rgba(0,0,0,0.1) 95%, rgba(255,255,255,0) 100%); 
    letter-spacing: 0.2rem;
    z-index: 9;

`;

const Welcome = styled.div`
    display: flex;
    align-items: center;
    -webkit-animation: scale-welcome 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: scale-welcome 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

const Links = styled.ul`
    display: none;
    align-items: center;
    -webkit-animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    width: 50vw;
    justify-content: space-around;
`

const DesktopLink = styled.li`
    align-self: center;
    list-style-type: none;
    padding: 1rem 1.5rem 0 2.5rem;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.2s;
    }
    
    a {
        &:hover {
            color: ${(props) => props.hoverColor};
        }

        text-decoration: none;
        color: white;
    }
`;

const Text = styled.h1`
    align-self: center;
    font-weight: lighter;
    margin: 3vh 1rem 0 1rem;
`

const Donut = styled.img`
    height: 4rem;
    padding-top: 3vh;
`;