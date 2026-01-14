import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import OrderSubmited from "./components/order-status/order-submited";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
