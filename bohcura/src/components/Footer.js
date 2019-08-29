import React from 'react';
import { NavLink } from "react-router-dom"

import styled from 'styled-components';

// styled components
const NavContainer = styled.div`
    background-color: #303030;
    width: 100%;
    height: 75px;
    line-height: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    z-index: 10000;
        @media (max-width: 768px) {
        height: auto;
    }
`;


const NavigationBar = styled.div`
    width: 70vw;
    height: 75px;
    line-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    z-index: 1000;
        @media (max-width: 768px) {
        flex-flow: column wrap;
        height: auto;

    }
`;

const LogoText = styled.text`
    margin-left: 1rem;
    font-weight: bold;
    font-size: 1.7rem;
    color: #EDEDED;
    font-family: 'Special Elite', cursive;
    
`;

const Links = styled.div`
    .active{
        text-decoration: none;
        color: #ffffff;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
    }

    a{
        color: #ededed;
        margin: 0px 20px;
        font-size: 1.2rem;
        text-decoration: none;
        &:hover{
            color: #e54236;
            transition-duration: 0.2s;
        }
    }
`


export default function Nav () {
  return (
    <>
      <NavContainer>
        <LogoText>
          bohcura.
        </LogoText>

        <Links>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/feed/chefs">Chefs</NavLink>
          <NavLink to="/feed/recipes">Recipes</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dashboard">My Bohcura</NavLink>
        </Links>
      </NavContainer>
    </>
  )
}