import priceFormater from "@/app/utils/price-formater";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

    const cartList = [
      {
        name: "SportsOn Product 1",
        category: "Running",
        price: 392000,
        qty: 4,
        imgUrl: "product-1.png",
      },
      {
        name: "SportsOn Product 2",
        category: "Tennis",
        price: 432000,
        qty: 6,
        imgUrl: "product-2.png",
      },
      {
        name: "SportsOn Product 3",
        category: "Football",
        price: 321000,
        qty: 1,
        imgUrl: "product-3.png",
      },
    ];


const CartPopup = () => {

    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0)

    return (
      <div className="absolute bg-white right-0 top-21.5 shadow-xl shadow-black/10 border border-gray-200 w-90">
        <div className="p-4 border-b border-gray-200 font-bold text-center">
          Shooping Cart
        </div>
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
        <div className="boder-t border-gray-200 p-4">
          <div className="flex justify-between font-semibold ">
            <div className="text-sm">Total</div>
            <div className="text-primary text-xs flex justify-center self-center">
              {priceFormater(totalPrice)}
            </div>
                </div>
                <Button variant="dark" className="w-full mt-4">
                    Checkout Now!
                    <FiArrowRight size={14}/>
                </Button>
        </div>
      </div>
    );
}

export default CartPopup;