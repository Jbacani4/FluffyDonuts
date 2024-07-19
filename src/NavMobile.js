import styled from "styled-components";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";


const NavMobile = () => {
    
    // const linksEN = [
    //     {text: "HOME", linkTo: div},
    //     {text: "ABOUT", linkTo: div},
    //     {text: "CONTACT", linkTo: div},
    // ]

    // const linksFR = [
    //     {text: "ACCUEIL", linkTo: div},
    //     {text: "À PROPOS", linkTo: div},
    //     {text: "CONTACT", linkTo: div},
    // ]

    // set useContext() for ENG or FR display
    // Text onClick => handler(section), scrolls to linksENG.linkTo/linksFR.linkTo depending on context

    const [expanded, setExpanded] = useState(false)
    const expandMenu = () => {
        setExpanded(!expanded)
    }
    
    return (
        <>
            <MenuIcon onClick={expandMenu} style={{display:`${expanded === false ? "block" : "none"}`}}/>
            <Container style={{display:`${expanded === false ? "none" : "block"}`}}>
                <CloseIcon onClick={expandMenu}/>
                <Text>HOME</Text>
                <Text>ABOUT</Text>
                <Text>CONTACT</Text>
                <Text>FR</Text>
            </Container>
        </>
    );
};

export default NavMobile;

const MenuIcon = styled(IoMenu)`
    font-size: 2.5rem;
    position: fixed;
    top: 1rem;
    right: 1.5rem;
`

const Container = styled.div`
    background-color: var(--lightPink);
    color: var(--darkPink);
    width: 60%;
    height: 100vh;
    float: right;
    text-align: right;
    padding-right: 2rem;
`

const Text = styled.h1`
    font-size: 1.75rem;
    font-weight: 100;
    margin: 1.5rem 0;
    color: var(--darkPink);
    `

const CloseIcon = styled(IoCloseOutline)`
    font-size: 2.5rem;
    margin-top: 2rem;
    color: var(--darkGreen)
`