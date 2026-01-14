"use client"

import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductAction = () => {
  const [qty, setQty] = useState(1);
  const { push } = useRouter();

  return (
    <div className="flex gap-5">
      <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <div
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp />
          </div>
          <div
            className="border-gray-500 cursor-pointer h-1/2 aspect-square flex justify-center items-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </div>
        </div>
      </div>
      <Button className="px-20 w-full">
        <FiShoppingBag size={24} />
        Add To Cart
      </Button>
      <Button
        variant="dark"
        className="px-20 w-full"
        onClick={() => push("/checkout")}
      >
        Check Out Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductAction;