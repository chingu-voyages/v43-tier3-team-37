import styled from "styled-components";

export const SecondaryButton = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 2px solid ${({ theme }) => theme.colors.softorange};
  background: ${({ theme }) => theme.colors.white};
  width: 145px;
  height: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    border-color: transparent;
  }
`;

export const PrimaryButton = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 2px solid ${({ theme }) => theme.colors.softorange};
  background: ${({ theme }) => theme.colors.softorange};
  width: 145px;
  height: 40px;
  color: ${({ theme }) => theme.colors.darkgray};
  cursor: pointer;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
export const TertiaryButton = styled.button`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-family: ${({ theme }) => theme.fonts[2]};
  border: 2px solid ${({ theme }) => theme.colors.softorange};
  background: transparent;
  width: 145px;
  height: 40px;
  color: #ffffff;
  transition: border-color 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.lightpink};
  }
`;
