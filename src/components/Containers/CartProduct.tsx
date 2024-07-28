"use client";

import { useRouter } from "next/navigation"; // Menggunakan next/router untuk routing di Next.js
import Button from "../Elements/Button/Button";
import Image from "next/image";
import { ReactNode } from "react";

type CartProductProps = {
  children?: ReactNode;
  width?: string;
  page?: string;
};

const CartProduct = ({ children, width }: CartProductProps) => {
  return (
    <div className={`${width} h-full flex flex-col gap-6 bg-white`}>
      {children}
    </div>
  );
};

const CartProductHeader = ({ page }: CartProductProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-h6 text-dark-primary font-heading font-semibold leading-[21.6px] w-full">
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h6>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h6 className="text-h6 text-primary font-heading font-semibold">
            Rp 250K
          </h6>
          <span className="line-through text-dark-disabled text-body-medium">
            Rp 500K
          </span>
        </div>
        <div className="bg-main-secondary rounded-[10px] py-[4px] px-[10px] text-[12px] flex items-center justify-center text-light-primary">
          Diskon 50%
        </div>
      </div>
      {page === "metode" ? null : (
        <p className="text-body-small text-info font-body font-medium">
          Penawaran spesial tersisa 2 hari lagi!
        </p>
      )}
    </div>
  );
};

const CartProductBuyButton = () => {
  const router = useRouter();
  const handleAddToCart = () => {
    router.push("/metode");
  };

  return (
    <Button
      onClick={() => handleAddToCart()}
      className="w-full rounded-[10px] py-2 bg-main-primary text-light-primary text-body-medium font-body font-bold"
    >
      Beli Sekarang
    </Button>
  );
};

const CartProductHero = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-body-medium text-dark-primary font-heading font-semibold">
        Kelas ini Sudah Termasuk
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-2 items-center">
          <Image src="/icons/File_Check.png" alt="" width="24" height="24" />
          <p className="text-body-small text-dark-secondary font-body">
            Ujian Akhir
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/icons/video.png" alt="" width="24" height="24" />
          <p className="text-body-small text-dark-secondary font-body">
            45 Video
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/icons/book-2.png" alt="" width="24" height="24" />
          <p className="text-body-small text-dark-secondary font-body">
            7 Dokumen
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/icons/file-certificate.png"
            alt=""
            width="24"
            height="24"
          />
          <p className="text-body-small text-dark-secondary font-body">
            Ujian Akhir
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/icons/File_Edit.png" alt="" width="24" height="24" />
          <p className="text-body-small text-dark-secondary font-body">
            Pretest
          </p>
        </div>
      </div>
    </div>
  );
};

const CartProductFooter = () => {
  return (
    <div>
      <p className="text-body-medium text-dark-primary font-heading font-semibold">
        Bahasa Pengantar
      </p>
      <div className="flex gap-2">
        <Image src="/icons/world.png" alt="" width="24" height="24" />
        <p className="text-body-small text-dark-secondary font-body">
          Bahasa Indonesia
        </p>
      </div>
    </div>
  );
};

export {
  CartProductHeader,
  CartProductBuyButton,
  CartProductHero,
  CartProductFooter,
};

export default CartProduct;
