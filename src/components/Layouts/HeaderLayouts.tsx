"use client";

import Link from "next/link";
import Button from "../Elements/Button/Button";
import Logo from "../Containers/Logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type HeaderLayoutsProps = {
  position?: string;
  type?: string;
  page?: string;
}

const HeaderLayouts = ({ type, page }: HeaderLayoutsProps) => {


  return (
    <header className="fixed w-screen md:h-20 h-[74px] bg-white flex justify-between items-center md:px-[120px] px-6 md:py-3 py-4 shadow-lg z-10">
      <Logo className="md:w-[237px] w-[152px] h-[42px] md:h-14 flex justify-center items-center md:px-6" />
      {type === "product" ? <Body page={page}/> : ""}
    </header>
  );
};

const Body = ({ page }: HeaderLayoutsProps) => {

  return (
    <>
    <div className="md:flex hidden gap-4 items-center">
      {page === "landingpage" && <ButtonRegister />}
      {page === "authenticated" && <Profile/>}
      {page === "metode" && <Metode/>}
    </div>
    {page === "landingpage" ? <ButtonBar /> : <ProfileBar />}
    </>
  )
}

const Profile = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Link
          className=" text-dark-secondary font-bold font-body font-body-medium"
          href="/kategori"
        >
          Kategori
        </Link>
        <div
        onClick={handleClick}
        className="flex w-11 h-11 justify-center items-center"
      >
        {click ? (
          <Image
            className="w-full h-full cursor-pointer"
            src="/avatars/user-avatar.png"
            alt=""
            width={24}
            height={24}
          />
        ) : (
          <Image
            className="w-full h-full cursor-pointer"
            src="/avatars/user-avatar.png"
            alt=""
            width={24}
            height={24}
          />
        )}
      </div>
      <div
        className={
          click ? "hidden" : "absolute top-[4.6rem] right-[7.5rem] z-10"
        }
      >
        <ul className="flex flex-col items-center bg-white w-[200px] border">
          <li className="w-full h-[54px] items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
            <Link href="/profile">Profile Saya</Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
            <Link href="/">Kelas Saya</Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
            <Link href="/keranjang">Pesanan Saya</Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-main-tertiary font-medium font-body font-body-medium border-b">
            <Link href="/" className="flex gap-[5px] w-6 h-6 items-center">
              Keluar
              <Image
                className="w-5 h-[18px]"
                src="/icons/Logout icon.png"
                alt=""
                width={20}
            height={18}
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
};

const ProfileBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden w-8 h-8 justify-center items-center"
      >
        {click ? (
          <Image
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
            width={20}
            height={18}
          />
        ) : (
          <Image
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
            width={20}
            height={18}
          />
        )}
      </div>
      <div className={click ? "hidden" : "absolute top-16 left-0 z-10"}>
        <ul className="md:hidden flex flex-col items-center md:gap-6 bg-white w-screen border">
          <Link href="/kategori">
            <li className="w-screen h-[54px] md:hidden flex items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
              Kategory
            </li>
          </Link>
          <Link href="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
              Profile Saya
            </li>
          </Link>
          <Link href="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
              Kelas Saya
            </li>
          </Link>
          <Link href="/keranjang">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary hover:text-primary font-medium font-body font-body-medium border-b">
              Pesanan Saya
            </li>
          </Link>
          <Link href="/profile">
            <li className="w-screen h-[54px] flex gap-[5px] items-center py-4 px-3 text-main-tertiary font-medium font-body font-body-medium border-b">
              Keluar
              <Image src="/icons/Logout icon.png" alt="" width={20} height={18}/>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const ButtonRegister = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };
  return (
    <>
      <Link href="/kategori">
        <div className="text-dark-secondary font-bold font-body font-body-medium">
          Kategori
        </div>
      </Link>
      <li className="flex gap-4">
      <Button
          onClick={handleLogin}
          className="px-5 min-w-28 bg-main-primary text-light-primary text-body-medium font-body font-bold py-2 rounded-xl"
        >
          Login
        </Button>
        <Button
          onClick={handleRegister}
          className="px-5 min-w-28 text-primary text-body-medium font-body font-bold py-2 rounded-xl border border-primary"
        >
          Register
        </Button>
      </li>
    </>
  );
};

const ButtonBar = () => {
  const router = useRouter();
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };
  
  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden w-8 h-8 justify-center items-center"
      >
        {click ? (
          <Image
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
            width={20}
            height={12}
          />
        ) : (
          <Image
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
            width={20}
            height={12}
          />
        )}
      </div>
      <div className={click ? "hidden" : "absolute top-[4.6rem] left-0 z-10"}>
        <ul className="md:hidden flex flex-col items-center md:gap-6 bg-white w-screen border">
          <Link href="/beranda">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-primary font-medium font-body font-body-medium border">
              Beranda
            </li>
          </Link>
          <Link href="/kategori">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
              Kategori
            </li>
          </Link>
          <li className="w-screen h-[116px] flex flex-col justify-center gap-2 px-3 border-b p-1">
            <Button
              onClick={handleLogin}
              className="w-full h-11 text-center font-bold font-body-medium font-body bg-main-primary text-light-primary rounded-[10px]"
            >
              Login
            </Button>
            <Button
              onClick={handleRegister}
              className="w-full h-11 text-center font-bold font-body-medium font-body bg-white text-primary rounded-[10px] border border-primary"
            >
              Register
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

const Metode = () => {
  return (
    <div className="w-[486px] flex items-center justify-center ">
      <div className="h-full pr-3 flex items-center gap-3">
        <Image src="/icons/Base Step Elements.png" alt="base step" width="30" height="30" />
        <span className="text-body-small text-dark-primary font-body font-bold">Pilih Metode</span>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/icons/Connector.png" alt="base step" width="74" height="3" />
      </div>
      <div className="h-full pr-3 flex items-center gap-3">
      <Image src="/icons/Default Base Step.png" alt="base step" width="30" height="30" />
      <span className="text-body-small text-dark-disabled font-body font-bold">Bayar</span>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/icons/Connector.png" alt="base step" width="74" height="3" />
      </div>
      <div className="h-full pr-3 flex items-center gap-3">
      <Image src="/icons/Default Base Step.png" alt="base step" width="30" height="30" />
      <span className="text-body-small text-dark-disabled font-body font-bold">Selesai</span>
      </div>
    </div>
  )
}

export default HeaderLayouts;
