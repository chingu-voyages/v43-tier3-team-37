import React from "react";

import styled from "styled-components";
import { TertiaryButton, PrimaryButton } from "../../styles/ThemeButton.styled";
import logoImg from "../../assets/images/logo.png";
import cartIcon from "../../assets/icons/cart.png";
import userIcon from "../../assets/icons/user.png";
import SocialStack from "./SocialStack";
import {Link, useNavigate} from 'react-router-dom';
const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.darkgray};
`;

const HeaderWrapper = styled.div`
  padding: 0 1.5rem;
  max-width: 1300px;
  margin: 0 auto;
`;

const HeaderTop = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const HeaderTopLeft = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
const HeaderBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1.3rem 0;
`;

const LogoContainer = styled.div`
  max-width: 200px;

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }

  & img {
    width: 100%;
  }
`;

const CartSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* display: none; */

  & .icon {
    width: 24px;
    transition: transform 200ms;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Navbar = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }

  & .socials {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Header() {
  const nevigate= useNavigate();
  return (
    <MainHeader>
      <HeaderWrapper>
        <HeaderTop>
          <HeaderTopLeft>
            <TertiaryButton size="14px">Call - 987 654 321</TertiaryButton>
          </HeaderTopLeft>

          <LogoContainer>
            <img src={logoImg} alt="restaurant logo" />
          </LogoContainer>
          <CartSection>
            <div className="icon">
              <img src={cartIcon} alt="cart icon" />
            </div>
            <PrimaryButton size="14px" onClick={()=>nevigate('/menu')}>order now</PrimaryButton>

            <div className="icon">
              <img src={userIcon} alt="user icon" />
            </div>
          </CartSection>
        </HeaderTop>
      </HeaderWrapper>
      <HeaderBottom>
        <HeaderWrapper>
          <Navbar>
            <NavMenu>
              <Link to='/'>Home</Link>
              <Link to='/menu'>Menu</Link>
              <Link to='/contact'>Contact</Link>
            </NavMenu>
            <div className="socials">
              <SocialStack />
            </div>
          </Navbar>
        </HeaderWrapper>
      </HeaderBottom>
    </MainHeader>
  );
}

export default Header;
