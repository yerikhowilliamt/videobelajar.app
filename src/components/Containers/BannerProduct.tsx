import Image from 'next/image';
import { ReactNode } from 'react';

type BannerProductProps = {
  children: ReactNode;
  src: string;
  alt: string;
};

const BannerProduct: React.FC<BannerProductProps> = ({ children, src, alt }) => {
  return (
    <div
      className="relative w-full h-[400px] flex flex-wrap justify-center items-center rounded-xl"
    >
      <Image src={src} alt={alt} fill className="brightness-[20%] object-cover object-center h-full w-full rounded-lg"/>
      {children}
    </div>
  );
};

export default BannerProduct;
