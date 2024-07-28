import Image from "next/image";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  src?: string;
  alt?: any;
  width?: any;
  height?: any;
  children?: React.ReactNode;
};

const Button = ({
  onClick,
  className = "",
  src,
  alt,
  width,
  height,
  children,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {src && <Image src={src} alt={alt} width={width} height={height} />}
      {children}
    </button>
  );
};

export default Button;
