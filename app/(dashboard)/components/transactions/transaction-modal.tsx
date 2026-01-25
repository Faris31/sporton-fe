import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import priceFormater from "@/app/utils/price-formater";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
    isOpen: boolean,
    onClose: () => void,
}

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/images/payment-proof-dumy.png"
            alt="payment proof"
            width={200}
            height={401}
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md p-4 mb-4 flex flex-col gap-2.5 text-sm">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">23/02/2026 19:32</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">John Doe</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">08123456789</div>
            </div>
            <div className="flex justify-between gap-10 font-medium">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                Merdeka Street, Jakarta, Indonesia, 332122
              </div>
            </div>
          </div>
          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2 mb-6">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8">
              <Image
                src="/images/products/product-1.png"
                alt="product image"
                width={30}
                height={30}
              />
            </div>
            <div className="font-medium text-sm">SportsOn Hyperfast Shoes</div>
            <div className="font-medium ml-auto text-sm">3 units</div>
          </div>
          <div className="flex justify-between text-sm">
            <h4 className="font-semibold">Total </h4>
            <div className="text-primary font-semibold">
              {priceFormater(300000)}
            </div>
          </div>
          <div className="mt-12 flex justify-end gap-5">
            <Button
              className="bg-primary-light! text-primary! rounded-md"
              size="small"
            >
              <FiX size={20} />
              Reject
            </Button>
            <Button
              className="bg-[#50C252]! text-white! rounded-md"
              size="small"
            >
              <FiCheck size={20} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;