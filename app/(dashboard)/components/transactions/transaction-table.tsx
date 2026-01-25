import priceFormater from "@/app/utils/price-formater";
import { FiEye } from "react-icons/fi";

const datas = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: "08231223123",
    total: 450000,
    status: "pending",
  },
  {
    date: "23/02/2026 13:32",
    customer: "Delon Marx",
    contact: "08823291231",
    total: 753000,
    status: "paid",
  },
  {
    date: "23/02/2026 13:32",
    customer: "Delon Marx",
    contact: "08823291231",
    total: 753000,
    status: "rejected",
  },
];

type TTransactionTableProps = {
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-500";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-500";
      case "paid":
        return "bg-green-100 text-green-600 border-green-500";
    }
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">{data.date}</td>
              <td className="px-6 py-4 font-medium">{data.customer}</td>
              <td className="px-6 py-4 font-medium">{data.contact}</td>
              <td className="px-6 py-4 font-medium">
                {priceFormater(data.total)}
              </td>
              <td className="px-6 py-4 font-medium">
                <div
                  className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.status)}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-6 py-8 flex gap-3 text-gray-600">
                <button
                  onClick={onViewDetails}
                  className="cursor-pointer hover:scale-110 hover:bg-gray-100 py-1 px-2 rounded-md flex gap-3 items-center w-fit"
                >
                  <FiEye size={18} />
                  <span className="text-sm">View Details</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
