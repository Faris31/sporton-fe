import Image from "next/image";
import priceFormater from '@/app/utils/price-formater';
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const datas = [
    {
        name: "Running",
        imgUrl: "/images/categories/category-running.png",
        description: "Lorem Ipsum"
    },
    {
        name: "Football",
        imgUrl: "/images/categories/category-football.png",
        description: "Lorem Ipsum"
    },
    {
        name: "Swimming",
        imgUrl: "/images/categories/category-swimming.png",
        description: "Lorem Ipsum"
    },
]

const CategoryTable = () => {
    return (
      <div className="bg-white rounded-xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 font-semibold">Category Name</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-6 py-4 font-medium">
                  <div className="flex gap-6 items-center">
                    <div className="items-center aspect-square rounded-md">
                      <Image
                        src={data.imgUrl}
                        alt={data.name}
                        width={52}
                        height={52}
                        className="aspect-square object-contain"
                      />
                    </div>
                    <span className="">{data.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{data.description}</td>
                <td className="px-6 py-8 flex gap-3 text-gray-600">
                  <button className="cursor-pointer hover:bg-yellow-100 hover:scale-110 p-1 rounded-sm">
                    <FiEdit2 size={20} className="cursor-pointer" />
                  </button>
                  <button className="cursor-pointer hover:bg-red-100 hover:scale-110 p-1 rounded-sm">
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default CategoryTable;