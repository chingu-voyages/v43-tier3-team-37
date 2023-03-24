import styled from 'styled-components'

import React from 'react'

const Button = ({content}) => {
  return (
    <StyledButton>{content}</StyledButton>
  )
}

const StyledButton = styled.button`

background-color: #E1B168;
color: #292E36;
border-color: #ffff;
border: 1px;
border-style: solid;
width: 80%;
height: 40px;
text-transform: uppercase;
cursor: pointer;

`

export default Button