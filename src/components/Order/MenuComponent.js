import React from "react";
import Dishes from "./DishesComponent";
import * as dishesList from "../Shared/Dishes";

const Menu = () => {
  return (
    <div>
      <Dishes dishes={dishesList} dishName="Starters" />
      <Dishes dishes={dishesList} dishName="Main Dishes" />
      <Dishes dishes={dishesList} dishName="Desserts" />
      <Dishes dishes={dishesList} dishName="Drinks" />
    </div>
  );
};
export default Menu;
