"use client"

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmited = () => {

    const reloadOrderStatus = () => {
        window.location.reload();
    };

    return (
      <div className="bg-white w-160 p-16 mx-auto flex flex-col justify-center items-center text-center">
        <Image
          src="/images/icon-order-submitted.svg"
          width={117}
          height={117}
          alt="Order Submitted"
          className="mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">Order Submitted!!</h2>
        <p className="mb-8">
          Your Order is recorded in our system, we are still confirming the
          payment status, please wait and your order status will be updated in
          less than 12 hours.
        </p>
        <Button variant="dark" className="w-full" onClick={reloadOrderStatus}>
          <FiRefreshCw />
          Refersh Order Status
        </Button>
      </div>
    );
}

export default OrderSubmited;