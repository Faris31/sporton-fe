import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";

type TTransactionModalProps = {
    isOpen: boolean,
    onClose: () => void,
}

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Add New Transaction">
        <div className="flex gap-6">
          <div>
            <h4 className="font-semibold text-xs mb-2">Payment Proof</h4>
            <Image src="/images/payment-proof-dumy.png" alt="payment proof" width={200} height={401} />
          </div>
        </div>
      </Modal>
    );
}

export default TransactionModal;