"use client";

import { useState } from "react";
import Button from "../Elements/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardMetode = () => {
  return (
    <div className="w-full flex flex-col gap-9">
      <div className="w-full bg-light-primary p-6 gap-6 flex flex-col border rounded-[10px]">
        <h5 className="text-h5 text-dark-primary font-heading font-semibold">
          Metode Pembayaran
        </h5>
        <BankTrasnfer />
        <EWallet />
        <DebitCreditCard />
      </div>
      <Summary />
    </div>
  );
};

const BankTrasnfer = () => {
  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
  };
  return (
    <ul className="flex flex-col gap-2.5">
      <li className="flex justify-between py-4 px-5 border rounded-[10px]">
        <span className="text-body  text-dark-primary font-bold font-body">
          Transfer Bank
        </span>
        <Button
          onClick={() => handleCLick()}
          src={
            click ? "/icons/Arrow Down Icon.png" : "/icons/Arrow Up Icon.png"
          }
          alt="arow icon"
          width={12}
          height={8}
        />
      </li>
      {click === true && (
        <>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3">
              <Image src="/metode/BCA.png" width="24" height="24" alt="BCA" />
              <p className="text-body-small text-dark-primary font-body">
                Bank BCA
              </p>
            </div>
            <Image
              src="/icons/Metode Check.png"
              width="24"
              height="24"
              alt="checked"
            />
          </li>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3">
              <Image src="/metode/BNI.png" width="24" height="24" alt="BCA" />
              <p className="text-body-small text-dark-primary font-body">
                Bank BNI
              </p>
            </div>
          </li>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3">
              <Image src="/metode/BRI.png" width="24" height="24" alt="BCA" />
              <p className="text-body-small text-dark-primary font-body">
                Bank BRI
              </p>
            </div>
          </li>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3 items-center">
              <Image
                src="/metode/Mandiri.png"
                width="24"
                height="7"
                alt="BCA"
              />
              <p className="text-body-small text-dark-primary font-body">
                Bank Mandiri
              </p>
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

const EWallet = () => {
  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
  };
  return (
    <ul className="flex flex-col gap-2.5">
      <li className="flex justify-between py-4 px-5 border rounded-[10px]">
        <span className="text-body  text-dark-primary font-bold font-body">
          E-Wallet
        </span>
        <Button
          onClick={() => handleCLick()}
          src={
            click ? "/icons/Arrow Down Icon.png" : "/icons/Arrow Up Icon.png"
          }
          alt="arow icon"
          width={12}
          height={8}
        />
      </li>
      {click === true && (
        <>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3">
              <Image src="/metode/Dana.png" width="24" height="24" alt="Dana" />
              <p className="text-body-small text-dark-primary font-body">
                Dana
              </p>
            </div>
          </li>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3">
              <Image src="/metode/Ovo.png" width="24" height="24" alt="OVO" />
              <p className="text-body-small text-dark-primary font-body">OVO</p>
            </div>
          </li>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3">
              <Image
                src="/metode/Link Aja.png"
                width="24"
                height="24"
                alt="Link Aja"
              />
              <p className="text-body-small text-dark-primary font-body">
                Link Aja
              </p>
            </div>
          </li>
          <li className="flex justify-between py-4 px-5 border rounded-[10px]">
            <div className="flex gap-3 items-center">
              <Image
                src="/metode/Shopee Pay.png"
                width="24"
                height="24"
                alt="Shopee Pay"
              />
              <p className="text-body-small text-dark-primary font-body">
                Shopee Pay
              </p>
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

const DebitCreditCard = () => {
  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
  };

  return (
    <ul className="flex flex-col gap-2.5">
      <li className="flex justify-between py-4 px-5 border rounded-[10px]">
        <span className="text-body  text-dark-primary font-bold font-body">
          Kartu Kredit/Debit
        </span>
        <Button
          onClick={() => handleCLick()}
          src={
            click ? "/icons/Arrow Down Icon.png" : "/icons/Arrow Up Icon.png"
          }
          alt="arow icon"
          width={12}
          height={8}
        />
      </li>
      {click === true && (
        <li className="flex justify-between py-4 px-5 border rounded-[10px]">
          <div className="flex gap-3 items-center">
            <Image
              src="/metode/Mastercard.png"
              width="30"
              height="24"
              alt="Mastercard"
            />
            <Image src="/metode/Visa.png" width="56" height="18" alt="Visa" />
            <Image src="/metode/JCB.png" width="31" height="24" alt="JCB" />
          </div>
        </li>
      )}
    </ul>
  );
};

const Summary = () => {
  };
  return (
    <div className="w-full h-full bg-light-primary p-6 gap-6 flex flex-col border rounded-[10px]">
      <h5 className="text-h5 text-dark-primary font-heading font-semibold">
        Ringkasan Pesanan
      </h5>
      <div className="flex justify-between gap-6 h-full w-full">
        <p className="text-body-medium md:text-body-large text-dark-secondary font-body w-full">
          Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer &
          Product Manager.{" "}
        </p>
        <span className="text-body-medium md:text-body-large text-dark-secondary font-bold font-body w-full flex justify-end">
          Rp 767.500
        </span>
      </div>
      <div className="flex justify-between h-full">
        <p className="text-body-medium md:text-body-large text-dark-secondary font-body">
          Biaya Admin{" "}
        </p>
        <span className="text-body-medium md:text-body-large text-dark-secondary font-bold font-body flex justify-end">
          Rp 7.000
        </span>
      </div>
      <div className="border-b-2"></div>
      <div className="flex justify-between w-full">
        <span className="text-body-medium md:text-body-large text-dark-primary font-body font-bold">
          Total Pembayaran
        </span>
        <span className="text-body-large md:text-h5 text-primary font-heading font-semibold flex justify-end">
          Rp 774.500
        </span>
      </div>
      <Button
        
        className="text-body-medium py-2 text-light-primary font-body font-bold bg-main-primary rounded-[10px]"
      >
        Beli Sekarang
      </Button>
    </div>
  );
};

export default CardMetode;
