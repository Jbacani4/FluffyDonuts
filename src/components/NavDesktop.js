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

    const {greeting, menu} = texts[language] 

    const links = [
        {
            text: menu[0],
            // color: "var(--darkGreen)",
            active: false
        },
        {
            text: menu[1],
            // color: "var(--lightGreen)",
            active: false
        },
        {
            text: menu[2],
            // color: "var(--darkPink)",
            active: false
        },
        {
            text: menu[3],
            // color: "var(--lightPink)",
            active: false
        },
    ];

    return (
        <Container>
            <Welcome id="welcome" className={"scale-welcome"}>
                <Donut src={MmDonut}/>
                <Text>{greeting} 👋</Text>
            </Welcome>

            <Links id="links">
                {links.map((link, index) => {

                    const {text} = link
                    // const {text, color} = link
                    const isLanguageLink = link.text === "FR" || link.text === "EN"

                    return (

                        <DesktopLink key={`link-${text}`} href={link.text==="HOME" ? "#AppContainer" : `#${link.text}`} hoverColor={colors[index]} onClick={isLanguageLink ? toggleLanguage : null}>{text}</DesktopLink>
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
    /* background: transparent; */
    background: linear-gradient(180deg, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.34) 90%, rgba(0,0,0,0.15) 95%, rgba(0,0,0,0) 100%);
    letter-spacing: 0.2rem;
    z-index: 2;

    /* border: 1px solid fuchsia; */
`;

const Welcome = styled.div`
    display: flex;
    align-items: center;
    -webkit-animation: scale-welcome 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: scale-welcome 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

const Links = styled.div`
    display: none;
    align-items: center;
    -webkit-animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    width: 50vw;
    justify-content: space-between;
    /* border: 1px solid aqua; */
`

const DesktopLink = styled.a`
    align-self: center;
    text-decoration: none;
    color: white;
    padding: 1rem 2.5rem 0 2.5rem;
    transition: transform 0.2s;
    cursor: pointer;
    
    &:hover {
        color: ${(props) => props.hoverColor};
        transform: scale(1.2);
        transition: transform 0.2s;
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