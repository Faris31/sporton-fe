import priceFormater from "@/app/utils/price-formater";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const handleCheckout = () => {
    push("/checkout");
  };
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <div className="absolute bg-white right-0 top-21.5 shadow-xl shadow-black/10 border border-gray-200 w-90">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shooping Cart
      </div>
      <div className="overflow-auto max-h-75">
        {items.length ? (
          items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 p-4 flex gap-3"
            >
              <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                <Image
                  src={getImageUrl(item.imageUrl)}
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
                  <div className="text-primary">
                    {priceFormater(item.price)}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="small"
                className="w-7 h-7 p-0! self-center ml-auto"
                onClick={() => removeItem(item._id)}
              >
                <FiTrash2 />
              </Button>
            </div>
          ))
        ) : (
          <div className="text-center text-xs opacity-50 mt-5">
            Your Shopping Cart Is Empty
          </div>
        )}
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
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now
          <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;