const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("../../assets/images/Menu", false, /\.(png|jpe?g|svg)$/)
);

const dishes = [
  {
    id: 1,
    dishType: "Main Dishes",
    name: "Spaghetti Carbonara",
    price: "$12.99",
    image: `${images.find((img) => img.includes("Spaghetti"))}`,
  },
  {
    id: 2,
    dishType: "Main Dishes",
    name: "Margherita Pizza",
    price: "$9.99",
    image: `${images.find((img) => img.includes("MargheritaPizza"))}`,
  },

  {
    id: 3,
    dishType: "Main Dishes",
    name: "Chicken Alfredo",
    price: "$14.99",
    image: `${images.find((img) => img.includes("ChickenAlfredo"))}`,
  },
  {
    id: 4,
    dishType: "Main Dishes",
    name: "Beef Tacos",
    price: "$10.99",
    image: `${images.find((img) => img.includes("BeefTacos"))}`,
  },
  {
    id: 5,
    dishType: "Starters",
    name: "Bruschetta",
    price: "$8.99",
    image: `${images.find((img) => img.includes("Bruschetta"))}`,
  },
  {
    id: 6,
    dishType: "Starters",
    name: "Caesar Salad",
    price: "$7.99",
    image: `${images.find((img) => img.includes("CaesarSalad"))}`,
  },
  {
    id: 7,
    dishType: "Starters",
    name: "Caprese Salad",
    price: "$9.99",
    image: `${images.find((img) => img.includes("CapreseSalad"))}`,
  },
  {
    id: 8,
    dishType: "Starters",
    name: "Garlic Bread",
    price: "$5.99",
    image: `${images.find((img) => img.includes("GarlicBread"))}`,
  },
  {
    id: 9,
    dishType: "Starters",
    name: "Mozzarella Sticks",
    price: "$6.99",
    image: `${images.find((img) => img.includes("MozzarellaSticks"))}`,
  },
  {
    id: 10,
    dishType: "Desserts",
    name: "Tiramisu",
    price: "$6.99",
    image: `${images.find((img) => img.includes("Tiramisu"))}`,
  },
  {
    id: 11,
    dishType: "Desserts",
    name: "Chocolate Cake",
    price: "$7.99",
    image: `${images.find((img) => img.includes("ChocolateCake"))}`,
  },
  {
    id: 12,
    dishType: "Desserts",
    name: "Fruit Salad",
    price: "$5.99",
    image: `${images.find((img) => img.includes("FruitSalad"))}`,
  },
  {
    id: 13,
    dishType: "Desserts",
    name: "Ice Cream Sundae",
    price: "$4.99",
    image: `${images.find((img) => img.includes("IceCreamSundae"))}`,
  },
  {
    id: 14,
    dishType: "Drinks",
    name: "Iced Tea",
    price: "$2.99",
    image: `${images.find((img) => img.includes("IcedTea"))}`,
  },
  {
    id: 15,
    dishType: "Drinks",
    name: "Lemonade",
    price: "$2.99",
    image: `${images.find((img) => img.includes("Lemonade"))}`,
  },
  {
    id: 16,
    dishType: "Drinks",
    name: "Orange Juice",
    price: "$3.99",
    image: `${images.find((img) => img.includes("OrangeJuice"))}`,
  },
];

export default dishes;
