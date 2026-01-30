import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import {
  createCategory,
  updateCategory,
} from "@/app/services/category.service";
import { toast } from "react-toastify";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  category?: Category | null;
};

type CategoryFormData = {
  name: string;
  description: string;
};

const CategoryModal = ({
  isOpen,
  onClose,
  category,
  onSuccess,
}: TCategoryModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = !!category;

  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (isEditMode && isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        name: category.name,
        description: category.description,
      });
      setImagePreview(
        category.imageUrl ? getImageUrl(category.imageUrl) : null,
      );
    } else if (isOpen) {
      setFormData({
        name: "",
        description: "",
      });
      setImagePreview(null);
      setImageFile(null);
    }
  }, [isOpen, category]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      if (imageFile) {
        data.append("image", imageFile);
      }

      if (isEditMode) {
        await updateCategory(category._id, data);
      } else {
        await createCategory(data);
      }

      // Reset form
      setFormData({
        name: "",
        description: "",
      });
      setImageFile(null);
      setImagePreview(null);
      toast.success(
        isEditMode
          ? "Category updated successfully!"
          : "Category created successfully!",
      );

      onSuccess?.();
      onClose?.();
    } catch (error) {
      console.error(
        isEditMode ? "Failed to update category" : "Failed to create category",
        error,
      );
      toast.error(
        isEditMode
          ? "Failed to updated category. Please try again."
          : "Failed to created product. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Add New Category" : "Edit Category"}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50">
            <ImageUploadPreview
              label="Category Image"
              value={imagePreview}
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="categoryName">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e. g. Running"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows={5}
                placeholder="Category Details...."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="ml-auto mt-2 rounded-lg"
        >
          {isEditMode ? "Update Category" : "Create Category"}
        </Button>
      </form>
    </Modal>
  );
};

export default CategoryModal;