"use client"

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";
import { Transaction } from "@/app/types";
import { getAllTransactions } from "@/app/services/transaction.service";
import { toast } from "react-toastify";

const TransactionManagement = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransaction = async () => {
    try {
      const data = await getAllTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetcg transactions", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  }

  const handleViewDetails = (transaction: Transaction) => {
    setIsModalOpen(true);
    setSelectedTransaction(transaction);
  };

  const handleStatusChange = async (
    id: string,
    status: "paid" | "rejected",
  ) => {
    try {
      const formData = new FormData();
      formData.append("status", status);
      await updateTransaction(id, formData);

      toast.success("Transaction status updated");

      await fetchTransaction();
    } catch (error) {
      console.error("Failed to update transaction status", error);
      toast.error("Failed to update transaction status");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTransaction();
  }, []);

    return (
      <div>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-bold text-2xl">Transaction Management</h1>
            <p className="opacity-50">
              Verify incoming payments and manage orders.
            </p>
          </div>
        </div>
        <TransactionTable
          onViewDetails={handleViewDetails}
          transactions={transactions}
        />
        <TransactionModal
          transaction={selectedTransaction}
          onStatusChange={handleStatusChange}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    );
}

export default TransactionManagement;

function updateTransaction(id: string, formData: FormData) {
  throw new Error("Function not implemented.");
}
