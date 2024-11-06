import { useEffect, useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import styled from "styled-components";

const NavMobile = () => {
    const links = [
        {
            text: "HOME",
            color: "#FFF",
        },
        {
            text: "ABOUT",
            color: "#FFF",
        },
        {
            text: "CONTACT",
            color: "#FFF",
        },
        {
            text: "FR",
            color: "#FFF",
        },
    ];

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const mobileNav = document.getElementById("mobileNav");
        mobileNav.style.opacity = 0;

        const handleScroll = () => {
            const clientHeight = window.innerHeight;
            const currentHeight = window.scrollY;

            currentHeight >= clientHeight-100
                ? (mobileNav.style.opacity = 1)
                : (mobileNav.style.opacity = 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <MenuIcon id="mobileNav" onClick={() => setExpanded(!expanded)} />
            <Container style={{ display: `${expanded === false ? "none" : "flex"}` }}>
                <CloseIcon onClick={() => setExpanded(!expanded)} />

                {links.map((link) => (
                    <LinkText
                        href={`#${link.text}`}
                        onClick={() => setExpanded(!expanded)}
                    >
                        {link.text}
                    </LinkText>
                ))}
            </Container>
        </>
    );
};

export default NavMobile;

const MenuIcon = styled(IoMenu)`
    font-size: 2.5rem;
    position: fixed;
    top: 1rem;
    float: right;
    right: 1.5rem;
    display: block;
    z-index: 2;
    `;

const Container = styled.div`
    flex-direction: column;
    align-items: end;
    background-color: var(--lightPink);
    color: var(--darkPink);
    width: 60%;
    height: 100vh;
    position: fixed;
    right: 0;
    padding-right: 2rem;
    z-index: 3;
`;

const LinkText = styled.a`
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 100;
    margin: 1.5rem 0;
    color: var(--darkPink);
`;

const CloseIcon = styled(IoCloseOutline)`
    font-size: 2.5rem;
    margin-top: 2rem;
    color: var(--darkGreen);
`;
