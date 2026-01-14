type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  size = "normal",
}: TButtonProps) => {
  const baseStyle =
    "inline-flex gap-2 duration-200 justify-center items-center cursor-pointer hover:scale-102";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
    dark: "bg-dark text-white hover:bg-dark/85",
    ghost: "bg-transparent hover:bg-grey-100 text-dark",
  };

  const sizes = {
    normal: "py-4 px-9",
    small: "py-[10px] px-7",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;