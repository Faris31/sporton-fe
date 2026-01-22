import { FiCreditCard } from "react-icons/fi";
import CardWidthHeader from "../ui/card-witdh-header";
import { getAllBanks } from "@/app/services/bank.service";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: 2342413431,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "Mandiri",
    account_number: 8658346284,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "BNI",
    account_number: 7673671647,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "BRI",
    account_number: 917439873,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "BTPN",
    account_number: 124324554,
    account_holder: "PT SportsOn Digital",
  },
];

const PaymenOptions = async () => {
  const banks = await getAllBanks();

  return (
    <CardWidthHeader title="Payment Options">
      {banks.map((payment) => (
        <div
          className="flex gap-5 p-5 border-b border-gray-200"
          key={payment._id}
        >
          <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
            <FiCreditCard size={25} />
          </div>
          <div className="self-center">
            <div className="font-bold">{payment.bankName}</div>
            <div className="text-sm">{payment.accountNumber}</div>
            <div className="text-sm opacity-70">{payment.accountName}</div>
          </div>
          <div className="ml-auto bg-blue-50 text-gray-700 text-xs self-center justify-center h-fit px-2 py-1">
            Bank Transfer
          </div>
        </div>
      ))}
    </CardWidthHeader>
  );
};

export default PaymenOptions;