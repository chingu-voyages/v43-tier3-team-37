import styled from "styled-components";

export const ThemeButton = styled.button`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 1px solid ${({ theme }) => theme.colors.softorange};
  background: ${({theme})=> theme.colors.white};
  width: 145px;
  height: 40px;
  cursor: pointer;
 
`;

export const ThemeFillButton = styled.button`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 1px solid ${({ theme }) => theme.colors.softorange};
  background: ${({theme})=> theme.colors.softorange};
  width: 145px;
  height: 40px;
  cursor: pointer;
 
`;
