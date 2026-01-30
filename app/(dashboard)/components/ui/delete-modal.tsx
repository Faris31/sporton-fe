import Button from "@/app/(landing)/components/ui/button";
import Modal from "./modal";

type TDeleteModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteModal = ({ isOpen, onClose, onConfirm }: TDeleteModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Delete Item">
            <p>Are you sure you want to delete this items? If you click delete, it will you permanently removed.</p>
            <div className="flex gap-5 mt-3">
                <Button variant="ghost" className="w-full rounded-md" onClick={onClose}>Cancel</Button>
                <Button className="w-full rounded-md" onClick={onConfirm}>Yes, deleted it.</Button>
            </div>
        </Modal>
    )
}

export default DeleteModal;