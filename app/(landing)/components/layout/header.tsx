import Image from "next/image";
import Link from "next/link";
import {FiSearch} from "react-icons/fi"
import {FiShoppingBag} from "react-icons/fi"

const Header = () => {
    return (
      <header className="fixed bg-white w-full z-50 transition-all ease-in-out duration-500">
        <div className="flex z-0 justify-between gap-10 container mx-auto py-7">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
          <nav className="flex gap-44 font-medium">
            <Link
              href="#"
              className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-2/3 after:absolute after:left-1/2 after:-translate-x-1/2 after:translte-1"
            >
              Home
            </Link>
            <Link href="#">Category</Link>
            <Link href="#">Explore Products</Link>
          </nav>
          <div className="flex gap-10">
            <FiSearch size={24} />
            <div className="relative">
              <FiShoppingBag size={24} />
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-primary-light text-[10px] text-center">
                3
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;