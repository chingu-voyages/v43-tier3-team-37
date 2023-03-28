import styled from "styled-components";

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: stretch;
  margin-right: 50px;
  margin-left: 50px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 400px; /* set a fixed height for the menu item container */
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
  aspect-ratio: 1/1; /* set a fixed aspect ratio for the image */
  object-fit: cover; /* scale the image to cover the entire container */
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
