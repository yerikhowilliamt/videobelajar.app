import Image from "next/image";
import React from "react";

const StepperMetode = () => {
  return (
    <div className="flex md:hidden items-center justify-center">
      <div className="h-full pr-3 flex items-center gap-1">
        <Image
          src="/icons/Base Step Elements.png"
          alt="base step"
          width="30"
          height="30"
        />
        <span className="text-[12px] text-dark-primary font-body font-bold">
          Pilih Metode
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[14px] h-1">
          <Image
            src="/icons/Connector.png"
            alt="base step"
            width="14"
            height="3"
            className="w-full h-full"
          />
        </div>
        <div className="h-full pr-3 flex items-center gap-1">
          <Image
            src="/icons/Default Base Step.png"
            alt="base step"
            width="30"
            height="30"
          />
          <span className="text-[12px] text-dark-disabled font-body font-bold">
            Bayar
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[14px] h-1">
          <Image
            src="/icons/Connector.png"
            alt="base step"
            width="14"
            height="3"
            className="w-full h-full"
          />
        </div>
        <div className="h-full pr-3 flex items-center gap-1">
          <Image
            src="/icons/Default Base Step.png"
            alt="base step"
            width="30"
            height="30"
          />
          <span className="text-[12px] text-dark-disabled font-body font-bold">
            Selesai
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepperMetode;
