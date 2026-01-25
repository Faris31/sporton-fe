import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

const bankData = [
    {
        bankName: "BCA",
        accountNumber: 123432,
        accountName: "PT SportOn Digital Indonesia"
    },
    {
        bankName: "Mandiri",
        accountNumber: 123432,
        accountName: "PT SportOn Digital Indonesia"
    },
    {
        bankName: "BRI",
        accountNumber: 123432,
        accountName: "PT SportOn Digital Indonesia"
    },
]

const BankInfoList = () => {
    return (
      <div className="grid grid-cols-3 gap-8">
        {bankData.map((data, index) => (
          <div
            className="bg-white rounded-lg border border-gray-200"
            key={index}
          >
            <div className="flex justify-between p-5">
              <div className="flex gap-2 items-center">
                <div className="bg-blue-50 text-blue-600 rounded w-12 h-12 flex justify-center items-center">
                  <FiCreditCard size={24} />
                </div>
                <div>
                  <div className="font-semibold">{data.bankName}</div>
                  <div className="opacity-50 text-xs">Bank Transfer</div>
                </div>
              </div>
              <div className="gap-2 flex -mt-5 text-gray-500">
                <button className="cursor-pointer hover:scale-110 ">
                  <FiEdit2 size={20} />
                </button>
                <button className="cursor-pointer hover:scale-110 ">
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
            <div className="p-5 font-medium">
                <div className="text-xs opacity-50">Account Number</div>
                <div>{ data.accountNumber }</div>
            </div>
            <div className="border-t border-gray-200 px-5 py-3 text-xs">
                <span className="opacity-50">Holder : </span> {data.accountName}
            </div>
          </div>
        ))}
      </div>
    );
}

export default BankInfoList;