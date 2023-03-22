import React from "react";

import styled from "styled-components";
import { TertiaryButton, PrimaryButton } from "../styles/ThemeButton.styled";
import logoImg from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.png";
import userIcon from "../assets/icons/user.png";
import SocialStack from "./SocialStack";
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
  justify-content: space-between;
  align-items: center;
`;
const HeaderBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1.3rem 0;
`;

const LogoContainer = styled.div`
  max-width: 250px;

  & img {
    width: 100%;
  }
`;

const CartSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & .icon {
    width: 24px;
  }
`;

const Navbar = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Header() {
  return (
    <MainHeader>
      <HeaderWrapper>
        <HeaderTop>
          <TertiaryButton size="14px">Call - 987 654 321</TertiaryButton>
          <LogoContainer>
            <img src={logoImg} alt="restaurant logo" />
          </LogoContainer>
          <CartSection>
            <div className="icon">
              <img src={cartIcon} alt="cart icon" />
            </div>
            <PrimaryButton size="14px">order now</PrimaryButton>

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
              <a href="/">Home</a>
              <a href="/">Menu</a>
              <a href="/">Contact</a>
            </NavMenu>

            <SocialStack />
          </Navbar>
        </HeaderWrapper>
      </HeaderBottom>
    </MainHeader>
  );
}

export default Header;
