import React from "react";
import logoImg from "../assets/images/logo.png";
import styled from "styled-components";
import SocialStack from "./SocialStack";

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkgray};
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0;
`;

const FooterContainer = styled.div`
  padding: 0 1.5rem;

  max-width: 1300px;
  margin: 0 auto;

  .accent-text {
    color: ${({ theme }) => theme.colors.softorange};
  }

  h3 {
    font-size: 15px;
    border-top: 1px solid ${({ theme }) => theme.colors.softorange};
    border-bottom: 1px solid ${({ theme }) => theme.colors.softorange};
    display: inline-block;
    font-weight: 500;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    padding: 6px 0;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const LogoContainer = styled.div`
  max-width: 100px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 200px;
  }

  & img {
    width: 100%;
  }
`;

const Contact = styled.div`
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }

  .socials {
    display: flex;
    justify-content: center;

    @media screen and (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
`;

const NewsletterRegister = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
  form {
    display: flex;
    margin-top: 8px;
  }
  input[type="email"] {
    padding: 1rem;
    border: none;
    color: #fff;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts[2]};
    width: 100%;
  }

  button {
    border: none;
    background-color: #fff;
    padding: 1rem 3rem;
  }
`;

const WorkingHours = styled.div`
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: right;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          <LogoContainer>
            <img src={logoImg} alt="restaurant logo" />
          </LogoContainer>
        </div>
        <div className="bottom">
          <Contact>
            <h3>contact</h3>

            <p>5 Rue Dalou, 75015 Paris</p>

            <p>
              <span className="accent-text">Call</span> - +33 156 78 89 56
            </p>
            <p>
              <a href="mailto:benoit@mail.com" className="accent-text">
                benoit@mail.com
              </a>
            </p>
            <br />
            <div className="socials">
              <SocialStack />
            </div>
          </Contact>

          <NewsletterRegister>
            <p>Join our mailing list for updates,</p>

            <p>Get news & offers events.</p>

            <form>
              <input type="email" required placeholder="Email" />

              <button>Subscribe</button>
            </form>
          </NewsletterRegister>

          <WorkingHours>
            <h3>working hours</h3>

            <p>
              <span className="accent-text">Mon-Fri</span>: 7.00am – 6.00pm
            </p>

            <p>
              <span className="accent-text">Sat</span>: 7.00am – 6.00pm
            </p>

            <p>
              <span className="accent-text">Sun</span>: 8.00am – 6.00pm
            </p>
          </WorkingHours>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
