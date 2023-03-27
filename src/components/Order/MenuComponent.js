import React from "react";
import Dishes from "./DishesComponent";
import dishes from "../Shared/Dishes";

const Menu = () => {
  return (
    <div>
      <Dishes dishes={dishes} dishName="Starters" />
      <Dishes dishes={dishes} dishName="Main Dishes" />
      <Dishes dishes={dishes} dishName="Desserts" />
      <Dishes dishes={dishes} dishName="Drinks" />
    </div>
  );
};
export default Menu;
