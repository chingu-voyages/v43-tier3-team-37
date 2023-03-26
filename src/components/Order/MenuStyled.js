import styled from "styled-components";

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Price = styled.span`
  font-size: 14px;
  color: #999;
`;
