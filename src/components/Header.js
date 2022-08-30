import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ImSpoonKnife } from "react-icons/im";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { GiChopsticks } from "react-icons/gi";

import { NavLink } from 'react-router-dom';
import Search from './Search';

function Header() {


    return (
        <Nav>
            <LogoLink to="/"><ImSpoonKnife /></LogoLink>
            <Search />
            <List>
                <NavEl to="/cuisine/italian" className={navData => (navData.isActive ? "active" : '')}>
                    <FaPizzaSlice />
                    <div>Italian</div>
                </NavEl>
                <NavEl to="/cuisine/american" className={navData => (navData.isActive ? "active" : '')}>
                    <FaHamburger />
                    <div>American</div>
                </NavEl>
                <NavEl to="/cuisine/thai" className={navData => (navData.isActive ? "active" : '')}>
                    <TbSoup />
                    <div>Thai</div>
                </NavEl>
                <NavEl to="/cuisine/japanese" className={navData => (navData.isActive ? "active" : '')}>
                    <GiChopsticks />
                    <div>Japanese</div>
                </NavEl>
            </List>
        </Nav>
    )
}

export default Header

const LogoLink = styled(Link)`
    text-decoration: none;
    color: #000;
    height: 40px;
    width: 40px;
    border: 3px solid #000;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(to left, orange, salmon);

    & >svg{
        transform: scale(1.5)
    }
`



const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    box-shadow: 0px 6px 9px #ccc;
`

const List = styled.div`
    display: flex;
`

const NavEl = styled(NavLink)`
    width: 55px;
    height: 55px;
    border-radius: 100%;
    color: #fff;
    background: #333;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    margin: 0 20px;
    text-decoration: none;

    &.active {
         background: linear-gradient(to left, orange, red);
    }
}
`