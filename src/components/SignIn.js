import React from 'react'
import "../styles/SignIn.css"
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'


const SignIn = () => {
   

  return (
    <MainContainer>
      <SignInText>Welcome Back!</SignInText>
      <InputContainer>
        <Input type="text" placeholder="Email"/>
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer><Button content="sign in"/></ButtonContainer>
      <LastText>Don't have an account? Register</LastText>
      

    </MainContainer>
  )
}

const MainContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
height: 60vh;
width: 30vw;
background-color: #292E36;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
background-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
font-spoting: 0.4em;

`;

const SignInText = styled.h2`

margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 35%;
width: 100%;


`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`


const LastText = styled.h4`

margin: 0 0 2rem 0;

`

const LinkText = styled.a`

color: yellow;
`



export default SignIn