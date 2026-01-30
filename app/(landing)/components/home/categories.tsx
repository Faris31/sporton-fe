import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// const categoryList = [
//   {
//     name: "Running",
//     imgUrl: "category-running.png",
//   },
// ];

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-20 pt-30">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link
          href="#"
          className="flex gap-2 text-primary hover:text-orange-400"
        >
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-20 mt-9 sdh">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7D1] w-full aspect-square flex justify-center hover:shadow-xl hover:scale-105 duration-250"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={86}
                height="86"
                alt={category.name}
                className="mb-2.5"
              />
              <div className="text-primary text-xl font-medium text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
