"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="fixed z-30 bg-white w-full transition-all ease-in-out top-0">
      <div className="relative flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>
        <nav className="flex gap-44 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-0.75 after:w-2/3 after:absolute after:left-1/2 after:-translate-x-1/2 after:translte-1"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="flex gap-10 items-center">
          <FiSearch size={24} className="hover:scale-125 duration-200" />
          <button
            className="relative cursor-pointer hover:scale-125 duration-100"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-primary-light text-[10px] text-center">
              3
            </div>
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
