"use client";

import Image from "next/image";
import { cartList } from "../ui/cart-popup";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import priceFormater from "@/app/utils/price-formater";
import CardWidthHeader from "../ui/card-witdh-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const payment = () => {};

  return (
    <CardWidthHeader title="Cart Items">
      <div className="overflow-auto max-h-75">
        {cartList.map((item, index) => (
          <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormater(item.price)}</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="small"
              className="w-7 h-7 p-0! self-center ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="boder-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold ">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs flex justify-center self-center">
            {priceFormater(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          className="w-full mt-4"
          onClick={() => push("/payment")}
        >
          <FiCreditCard />
          Proceed to Payment
        </Button>
      </div>
    </CardWidthHeader>
  );
};

export default CartItems;
