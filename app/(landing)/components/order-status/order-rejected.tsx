"use client"

import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {


    return (
      <div className="bg-white w-160 p-16 mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-25 h-25 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-5">
          <FiAlertCircle size={90} />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Order Rejected!!</h2>
        <p className="mb-8">
          I&apos;m sorry your order is rejected because your payment proof is
          not valid
        </p>
      </div>
    );
}

export default OrderRejected;