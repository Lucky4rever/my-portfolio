import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/L.png';

const HeaderBlock = styled.header`
    position: fixed;
    top: calc(100% - 60px);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;

    background: var(--block-background);
    outline: 3px solid var(--border-color);
`;

const Navbar = styled.nav`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Collapse = styled.div`
    width: 60%;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px 0;
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
`;

const NavbarBrand = styled.a`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: fit-content;
    text-decoration: none;
    user-select: none;

    > span {
        display: block;
        font-size: 28px;
        height: fit-content;
    }
`;

const NavbarItem = styled.a`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    text-decoration: none;
    transition: 200ms;
    border: 1px solid transparent;

    :active {
        border: 1px solid transparent;
    }

    :hover, :focus {
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
    }
`;
 
const Header = () => {
    return (
        <HeaderBlock>
            <Navbar>
                <NavbarBrand href='/my-portfolio'>
                    <Logo src={logo} />
                    <span>Портфоліо</span>
                </NavbarBrand>
                <Collapse>
                    <NavbarItem href='/my-portfolio/skills'>
                        <span>Мої навички</span>
                    </NavbarItem>
                    <NavbarItem href='/my-portfolio/projects'>
                        <span>Мої проекти</span>
                    </NavbarItem>
                    <NavbarItem href='/my-portfolio/achivements'>
                        <span>Мої досягнення</span>
                    </NavbarItem>
                </Collapse>
            </Navbar>
        </HeaderBlock>
    )
};

export default Header;