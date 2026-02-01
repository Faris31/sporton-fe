"use client";

import { FiCheckCircle } from "react-icons/fi";
import CardWidthHeader from "../ui/card-witdh-header";
import FileUpload from "../ui/file-upload";
import Button from "../ui/button";
import priceFormater from "@/app/utils/price-formater";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";


const PaymentSteps = () => {
  const { push } = useRouter();
  const { items, customerInfo, reset } = useCartStore();
  const [file, setFile] = useState<File | null>();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  // const uploadConfirmed = () => {
  //   push("/order-status/123242")
  // }

  const handleConfirmPayment = async () => {
    if (!file) {
      alert("Please upload your payment receipt!");
      return;
    }

    if (!customerInfo) {
      alert("Customer information is missing, please return to checkout!");
      push("/checkout");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact!.toString(),
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append(
        "purchasedItems",
        JSON.stringify(
          items.map((item) => ({ productId: item._id, qty: item.qty })),
        ),
      );
      formData.append("totalPayment", totalPrice!.toString());

      const res = await transactionCheckout(formData);

      alert("Transactions created successfully!");
      reset();
      push(`/order-status/${res._id}`);

      console.log("Transaction response", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardWidthHeader title="Payment Steps">
      <div className="p-5 border-b border-gray-200">
        <ol className="list-decimal text-sm pl-2 flex flex-col gap-4 text-justify mb-6 ">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
            bank account listed under &apos;Payment Options&apos; (BCA, Mandiri,
            or BTPN).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>&apos;Upload Receipt & Confirm&apos;</b> button below to validate
            your transaction.
          </li>
        </ol>
        <FileUpload onFileSelect={setFile} />
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
          onClick={handleConfirmPayment}
        >
          <FiCheckCircle />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CardWidthHeader>
  );
};

export default PaymentSteps;
