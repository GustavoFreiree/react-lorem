import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from "../../../assets/logo-w-txt.svg";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.main};
    padding: 3rem 3.2rem;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${props => props.theme.margin.mainMargin};
`;

const Logo = styled.img`
    width: 20rem;
    user-select: none;
`;

const Nav = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1em;

    & > button > a {
        text-decoration: none;
        font-weight: bold;
        color: ${props => props.theme.colors.text}
    }

    @media (max-width: 1000px) {
        &:not(.active) > button:not(:first-child) {
            display: none;
        }
 
        &.active {
            transition: .3s;            
            background-color: ${props => props.theme.colors.subHovered};
            height: auto;
            width: 50%;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            flex-flow: column;
            gap: 1rem;
            padding: 2rem 1rem;
            border-radius: 0 0 0 1rem;
        }
    }

    @media (min-width: 1000px) {
        & > button:first-child {
            display: none
        }
    }
`;

const Header = () => {
    const [navBarActive, setNavBarActive] = useState(false);

    return (<HeaderContainer>
        <Wrapper>
            <Logo src={logo} alt='logo'/>
            <Nav className={navBarActive?'active': null}>
                <Button onClick={( ) => setNavBarActive(!navBarActive)}>
                    <span className="material-symbols-outlined">
                        {navBarActive? 'close': 'menu'}
                    </span>
                </Button>
                <Button><Link to='/'>Home</Link></Button>
                <Button outlined><Link to='/login'>Login</Link></Button>
            </Nav>
        </Wrapper>
    </HeaderContainer>);
}
 
export default Header;