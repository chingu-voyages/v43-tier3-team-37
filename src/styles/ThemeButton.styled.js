import styled from "styled-components";

export const SecondaryButton = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 2px solid ${({ theme }) => theme.colors.softorange};
  background: ${({ theme }) => theme.colors.white};
  width: 145px;
  height: 40px;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 2px solid ${({ theme }) => theme.colors.softorange};
  background: ${({ theme }) => theme.colors.softorange};
  width: 145px;
  height: 40px;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
`;
export const TertiaryButton = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 2px solid ${({ theme }) => theme.colors.softorange};
  background: transparent;
  width: 145px;
  height: 40px;
  color: #ffffff;
  cursor: pointer;
`;
