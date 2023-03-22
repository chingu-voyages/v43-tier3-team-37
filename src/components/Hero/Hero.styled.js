import styled from "styled-components";

export const HeroDiv = styled.div`
height: 8rem;
display: flex;
justify-content: center;
align-items: 'center';
background-color: ${({theme})=> theme.colors.darkblue};
color: ${({theme})=> theme.colors.white};
font-family: ${({ theme }) => theme.fonts[2]};
`;

export const H4 = styled.h4`
font-size: 2rem;
font-family: ${({ theme }) => theme.fonts[2]};
border-top: 1px solid ${({ theme }) => theme.colors.softorange};
border-bottom: 1px solid ${({ theme }) => theme.colors.softorange};
height: fit-content;
`
