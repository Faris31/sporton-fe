interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imgUrl: string;
}

const productList = (): Product[] => {
  return [
    {
      id: 1,
      name: "SportsOn Product 1",
      category: "Running",
      price: 392000,
      imgUrl: "product-1.png",
    },
    {
      id: 2,
      name: "SportsOn Product 2",
      category: "Tennis",
      price: 432000,
      imgUrl: "product-2.png",
    },
    {
      id: 3,
      name: "SportsOn Product 3",
      category: "Football",
      price: 321000,
      imgUrl: "product-3.png",
    },
    {
      id: 4,
      name: "SportsOn Product 4",
      category: "Football",
      price: 123000,
      imgUrl: "product-4.png",
    },
    {
      id: 5,
      name: "SportsOn Product 5",
      category: "Running",
      price: 452000,
      imgUrl: "product-5.png",
    },
    {
      id: 6,
      name: "SportsOn Product 6",
      category: "Basketball",
      price: 321000,
      imgUrl: "product-6.png",
    },
  ];
    
}
export default productList;
