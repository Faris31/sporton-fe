"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const { items } = useCartStore();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  const [active, setActive] = useState("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(
      `[data-id="${active}"]`,
    ) as HTMLElement | null;

    if (activeEl && underlineRef.current) {
      const { offsetLeft, offsetWidth } = activeEl;

      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  return (
    <header className="fixed z-30 backdrop-blur-md bg-white/70 w-full scroll-smooth">
      <div className="relative flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>
        <nav className="flex gap-44 font-medium relative" ref={containerRef}>
          <div
            ref={underlineRef}
            className="
          absolute
          -bottom-0.5
          left-0
          h-1
          bg-primary
          rounded-full
          transition-all
          duration-300
        "
          />
          <Link
            href="#hero-section"
            data-id="hero-section"
            onClick={() => setActive("hero-section")}
          >
            Home
          </Link>
          <Link
            href="#category-section"
            data-id="category-section"
            onClick={() => setActive("category-section")}
          >
            Category
          </Link>
          <Link
            href="#products-sections"
            data-id="products-sections"
            onClick={() => setActive("products-sections")}
          >
            Explore Products
          </Link>
        </nav>
        <div className="flex gap-10 items-center">
          <FiSearch size={24} className="hover:scale-125 duration-200" />
          <button
            className="relative cursor-pointer hover:scale-125 duration-100"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            {items.length ? (
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-primary-light text-[10px] text-center">
                {items.length}
              </div>
            ) : (
              <></>
            )}
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
