const dishes = [
  {
    id: 1,
    dishType: "Main Dishes",
    name: "Spaghetti Carbonara",
    price: "$12.99",
    image:
      "https://www.pexels.com/photo/pasta-with-shrimp-on-white-ceramic-plate-4518839/300x200",
  },
  {
    id: 2,
    dishType: "Main Dishes",
    name: "Margherita Pizza",
    price: "$9.99",
    image:
      "https://www.pexels.com/photo/top-view-photo-of-baked-pizza-2147491/300x200",
  },
  {
    id: 3,
    dishType: "Main Dishes",
    name: "Caesar Salad",
    price: "$8.99",
    image: "https://www.pexels.com/photo/salad-on-a-plate-2097090/300x200",
  },
  {
    id: 4,
    dishType: "Main Dishes",
    name: "Chicken Alfredo",
    price: "$14.99",
    image:
      "https://www.pexels.com/photo/delicious-traditional-italian-fettuccine-alfredo-pasta-11220209/300x200",
  },
  {
    id: 5,
    dishType: "Main Dishes",
    name: "Beef Tacos",
    price: "$10.99",
    image:
      "https://www.pexels.com/photo/tacos-in-close-up-photography-7904958/300x200",
  },
  {
    id: 6,
    dishType: "Starters",
    name: "Bruschetta",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1602521709105-5fa47ec5c3d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJ1c2NoZXR0YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    dishType: "Starters",
    name: "Caesar Salad",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    dishType: "Starters",
    name: "Caprese Salad",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1592327064819-3b3a2b2f1b64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwcmVzZSUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    dishType: "Starters",
    name: "Garlic Bread",
    price: "$5.99",
    image:
      "https://images.unsplash.com/photo-1620233065226-1527f28fb1ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmxpYyUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    dishType: "Starters",
    name: "Mozzarella Sticks",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1612408023917-c55a240e8f20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vemVsYXJyZWElMjBzdGlja3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    name: "Tiramisu",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1525295847127-b6fa481a0e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRpcmFtaXN1JTIwYnJlYWQlMjBkZXNzZXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    name: "Chocolate Cake",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1605170111452-86205c34fa85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNoYXRsZW5nZSUyMGNha2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    name: "Fruit Salad",
    price: "$5.99",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwc2FsYWQlMjBjb2xvclxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 14,
    name: "Ice Cream Sundae",
    price: "$4.99",
    image:
      "https://images.unsplash.com/photo-1567706070544-4c8e1d8444c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 15,
    name: "Iced Tea",
    price: "$2.99",
    image:
      "https://images.unsplash.com/photo-1584974497616-8c6b22915c05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMHRlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 16,
    name: "Lemonade",
    price: "$2.99",
    image:
      "https://images.unsplash.com/photo-1584974600878-ee5c5f0a0e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb25hZGUlMjBjYWtlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 17,
    name: "Orange Juice",
    price: "$3.99",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2UlMjBjaGVjZWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export default dishes;
