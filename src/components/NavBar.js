import React from 'react';
import styled from 'styled-components';

import { BRAND_NAME } from '../constants/constants';
import { ReactComponent as Menu } from '../assets/svg/menu.inline.svg';


const NavBarContainer = styled.nav`
  background-color: #000;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;
const LogoTitle = styled.h2`
  color: #fff;
`;

const MenuIcon = styled(Menu)`
  fill: #fff;
`;


const NavBar = () => {
  return <NavBarContainer>
        <LogoTitle>{BRAND_NAME}</LogoTitle>
        <MenuIcon />
        {/* <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/detail">Детально</Link>
            </li>
            <li>
              <Link to="/checkout">Корзина</Link>
            </li>
          </ul> */}
      </NavBarContainer>
          
}

export {NavBar}