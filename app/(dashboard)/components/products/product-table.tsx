import Image from "next/image";
import priceFormater from '@/app/utils/price-formater';
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

type TProductTableProps = {
  products: Product[];
  onDelete?: (id: string) => void;
  onEdit?: (product: Product) => void;
};

const ProductTable = ({ products, onDelete, onEdit }: TProductTableProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Product</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Price</th>
            <th className="px-6 py-4 font-semibold">Stock</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => (
            <tr
              key={data._id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <div className="items-center aspect-square bg-gray-100 rounded-md">
                    <Image
                      src={getImageUrl(data.imageUrl)}
                      alt={data.name}
                      width={52}
                      height={52}
                      className="aspect-square object-contain"
                    />
                  </div>
                  <span className="">{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                <div className="rounded-md bg-gray-200 px-2 py-1 w-fit">
                  {data.category?.name}
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                {priceFormater(data.price)}
              </td>
              <td className="px-6 py-4 font-medium">{data.stock} units</td>
              <td className="px-6 py-8 flex gap-3 text-gray-600">
                <button
                  onClick={() => onEdit?.(data)}
                  className="cursor-pointer"
                >
                  <FiEdit2 size={20} />
                </button>
                <button
                  onClick={() => onDelete?.(data._id)}
                  className="cursor-pointer"
                >
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;