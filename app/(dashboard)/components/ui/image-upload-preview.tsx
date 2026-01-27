import Image from "next/image";
import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

type TImageUploadPreviewProps = {
  label?: string;
  value?: string | null;
  onChange: (file: File) => void;
  className?: string;
};

const ImageUploadPreview = ({ label, value, onChange, className }: TImageUploadPreviewProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleImageClick = () => {
        fileInputRef?.current?.click();
    }
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            onChange(file);
        }
    }

    return (
      <div className={className}>
        <div
          onClick={handleImageClick}
          className="border-2 border-dashed border-primary rounded-lg h-50 flex flex-col justify-center items-center bg-primary/50 cursor-pointer"
        >
          {value ? (
            <Image
              src={value}
              alt="preview product"
              className="w-full h-full object-cover"
              width={190}
              height={190}
            />
          ) : (
            <>
              <FiUploadCloud className="text-primary" size={24} />
              <span className="text-sm font-medium">Click To Upload</span>
            </>
          )}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
      </div>
    );
}

export default ImageUploadPreview;