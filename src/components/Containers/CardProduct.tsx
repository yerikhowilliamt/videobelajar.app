"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CardProductProps = {
  productImage: string;
  avatar: string;
  price?: string | number;
};

const CardProduct = ({ productImage, avatar, price }: CardProductProps) => {
  const [click, setClick] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setClick(!click);
    router.push("/detail");
  };

  return (
    <div
      onClick={handleClick}
      className="2xl:w-[530px] md:w-[388px] w-full md:h-[426px] 2xl:h-full flex flex-col md:gap-4 gap-3 p-5 bg-white border rounded-[10px]"
    >
      <div className="w-full h-[83px] flex md:flex-col gap-3 md:gap-4">
        <Header productImage={productImage} />
        <Body avatar={avatar} />
      </div>
      <Footer price={price} />
    </div>
  );
};

type HeaderProps = {
  productImage: string;
};

const Header = ({ productImage }: HeaderProps) => {
  return (
    <Link href="">
      <Image
        className="w-full h-full rounded-[10px] object-cover"
        src={productImage}
        alt=""
        width={500}
        height={300}
      />
    </Link>
  );
};

type BodyProps = {
  avatar: string;
};

const Body = ({ avatar }: BodyProps) => {
  return (
    <div className="w-full h-[82px] flex flex-col md:gap-4 gap-2 items-center md:items-start">
      <Link href="">
        <div className="gap-2 w-full">
          <h6 className="md:text-h6 text-body-medium font-semibold md:leading-[21.6px] leading-[19.2px]">
            Big 4 Auditor Financial Analyst
          </h6>
          <p className="md:block hidden">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan...
          </p>
        </div>
      </Link>
      <Link href="">
        <div className="w-full md:h-11 h-[37px] flex items-center md:gap-2.5 gap-2 justify-center">
          <Image
            src={avatar}
            alt=""
            className="md:w-10 w-9 md:h-10 h-9"
            height={40}
            width={40}
          />
          <div className="w-full h-full flex flex-col justify-center">
            <span className="md:text-body-medium text-body-small font-medium md:leading-[22.4px] leading-[19.6px]">
              Jena Ortega
            </span>
            <p className="text-body-small overflow-hidden md:leading-[19.6px] leading-[16.8px]">
              Senior Accountant di{" "}
              <span className="text-body-small text-dark-secondary font-bold">
                Gojek
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

type FooterProps = {
  price?: string | number;
};

const Footer = ({ price }: FooterProps) => {
  return (
    <Link href="">
      <div className="w-full h-7 flex justify-between items-center md:mt-64 2xl:mt-[21rem]">
        <div className="flex gap-2 h-[20px]">
          <Image src="/icons/Rating.png" alt="" width={90} height={18} />
          <span className="border-b-2 font-medium text-dark-secondary">
            3.5 (86)
          </span>
        </div>
        <h4 className="md:text-h4 text-h5 font-heading font-semibold text-primary">
          {price}
        </h4>
      </div>
    </Link>
  );
};

export default CardProduct;
