import React from 'react'
import styled from 'styled-components'

const Input = ({type, placeholder}) => {

  return (
    <StyledInput type={type} placeholder={placeholder} />
  )

}

const StyledInput = styled.input`
   background-color: #292E36;
   border: 1px;
   border-style: solid;
   color: #ffff;
   padding-left: 3%;
   width: 80%;
   height: 40px;
  &::placeholder{
    color: #ffff;
    line-height:30px;

}

&:focus::placeholder {
  color: transparent;
}
`

export default Input