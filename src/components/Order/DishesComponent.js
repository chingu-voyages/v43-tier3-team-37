import { MenuContainer, MenuItem, Image, Name, Price } from "./MenuStyled";

const Dishes = ({ dishes, dishName }) => {
  const dishbyType = dishes.filter((d) => d.dishType === dishName);
  return (
    <div>
      <h2>{dishName}</h2>
      <MenuContainer>
        {dishbyType.map((dish) => (
          <MenuItem key={dish.id}>
            <Image src={dish.image} alt={dish.name} />
            <Name>{dish.name}</Name>
            <Price>{dish.price}</Price>
          </MenuItem>
        ))}
      </MenuContainer>
    </div>
  );
};
export default Dishes;
