"use client"

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.service";
import { toast } from "react-toastify";

const CategoryManagement = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDeleteId, setProductToDeleteId] = useState("");

  const fetctProducts = async () => {
    try {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error to fetching product", error);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setProductToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDeleteId) return;
    try {
      await deleteProduct(productToDeleteId);
      fetctProducts();
      toast.success("Product deleted successfully!");
      setIsDeleteModalOpen(false);
      setProductToDeleteId("");
    } catch (error) {
      console.error("Failed to deleting product:", error);
      toast.error("Failed to delete product. Please try again.");
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      fetctProducts();
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

    return (
      <div>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-bold text-2xl">Product Management</h1>
            <p className="opacity-50">
              Manage your inventory, prices and stock.
            </p>
          </div>
          <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
            <FiPlus size={24} /> Add Product
          </Button>
        </div>
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <ProductModal
          product={selectedProduct}
          onSuccess={fetctProducts}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    );
}

export default CategoryManagement;