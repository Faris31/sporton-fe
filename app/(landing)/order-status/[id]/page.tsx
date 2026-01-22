import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmited from "../../components/order-status/order-submited";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;

  const transaction = await getTransactionById(id);
  console.log("transaction", transaction);

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-30">
        <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
        {transaction.status === "pending" && <OrderSubmited />}
        {transaction.status === "paid" && <OrderConfirmed />}
        {transaction.status === "rejected" && <OrderRejected />}
      </div>
    </main>
  );
};

export default OrderStatus;
