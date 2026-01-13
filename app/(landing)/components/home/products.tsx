import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormater from "@/app/utils/price-formater";

const productsList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 392000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Tennis",
    price: 432000,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Football",
    price: 321000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Football",
    price: 123000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn Product 5",
    category: "Running",
    price: 452000,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Product 6",
    category: "Basketball",
    price: 321000,
    imgUrl: "product-6.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-sections" className="container mx-auto mt-20">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCT
      </h2>
      <div className="grid grid-cols-4 gap-5 mb-20">
        {productsList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 mb-8 bg-white hover:drop-shadow-xl hover:scale-105 duration-300 "
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {priceFormater(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection; 