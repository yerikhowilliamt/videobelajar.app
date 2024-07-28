import Link from "next/link";
import List from "../Elements/List/List";
import Logo from "../Containers/Logo";
import Image from "next/image";
import Button from "../Elements/Button/Button";

const FooterLayouts: React.FC = () => {
  return (
    <footer className="border w-full flex flex-col justify-center items-center gap-5 py-7 px-5 md:py-[64px] md:px-[120px] bg-primary">
      <Header />
      <Body />
      <Footer />
    </footer>
  );
};

const Header: React.FC = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col justify-between gap-4">
      <Address />
      <Tabs />
    </div>
  );
};

const Body: React.FC = () => {
  return <div className="w-full h-8 border-border border-b"></div>;
};

const Footer: React.FC = () => {
  return (
    <div className="w-full flex md:flex-wrap flex-wrap-reverse gap-3 justify-between items-center">
      <p className="text-body-medium text-dark-secondary font-body font-medium">
        @2023 Gerobak Sayur All Rights Reserved.
      </p>
      <div className="flex gap-[15px]">
        <Link href="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <Image src="/icons/Linkedin Icon.png" alt="" width="20" height="20" />
        </Link>
        <Link href="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <Image src="/icons/Facebook Icon.png" alt="" width="20" height="20" />
        </Link>
        <Link href="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <Image src="/icons/Instagram Icon.png" alt="" width="20" height="20" />
        </Link>
        <Link href="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <Image src="/icons/Twitter icon.png" alt="" width="20" height="20" />
        </Link>
      </div>
    </div>
  );
};

const Address: React.FC = () => {
  return (
    <div className="md:w-[352px] w-[320px] flex flex-col gap-4">
      <Logo className="w-52 h-14 flex gap-3 items-center" />
      <div className="flex md:flex-col flex-wrap gap-2 md:gap-3">
        <span className="md:text-body-large text-body-small text-dark-primary font-bold font-body md:leading-[25.2px] leading-[19.6px]">
          Gali Potensi Anda Melalui Pembelajaran Video hariesok.id!
        </span>
        <p className="text-body-small md:text-body-medium">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
        <p className="text-body-small md:text-body-medium">+62-877-7123-1234</p>
      </div>
    </div>
  );
};

const Tabs: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-12 gap-3 h-full">
      <Kategori />
      <Perusahaan />
      <Komunitas />
    </div>
  );
};

const Kategori: React.FC = () => {
  return (
    <div className="h-full flex md:flex-col gap-[15px] justify-between md:items-start items-center">
      <span className="text-body-medium text-dark-primary font-body font-bold">
        Kategori
      </span>
      <ul className="md:flex hidden flex-col gap-[13px]">
        <List classname="text-body-medium text-dark-secondary font-body">
          Digital & Teknologi
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Pemasaran
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Manjemen Bisnis
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Pengembangan Diri
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Desain
        </List>
      </ul>
      <Button className="md:hidden flex w-6 h-6">
        <Image src="/icons/Arrow Icon.png" alt="" width="8" height="12" />
      </Button>
    </div>
  );
};

const Perusahaan: React.FC = () => {
  return (
    <div className="h-full flex md:flex-col gap-[15px] justify-between md:items-start items-center">
      <span className="text-body-medium text-dark-primary font-body font-bold">
        Perusahaan
      </span>
      <ul className="md:flex hidden flex-col gap-[13px]">
        <List classname="text-body-medium text-dark-secondary font-body">
          Tentang Kami
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          FAQ
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Kebijakan Privasi
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Ketentuan Layanan
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Bantuan
        </List>
      </ul>
      <Button className="md:hidden flex w-6 h-6">
        <Image src="/icons/Arrow Icon.png" alt="" width="8" height="12"/>
      </Button>
    </div>
  );
};

const Komunitas: React.FC = () => {
  return (
    <div className="h-full flex md:flex-col gap-[15px] justify-between md:items-start items-center">
      <span className="text-body-medium text-dark-primary font-body font-bold">
        Komunitas
      </span>
      <ul className="md:flex hidden flex-col gap-[13px]">
        <List classname="text-body-medium text-dark-secondary font-body">
          Tips Sukses
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Blog
        </List>
      </ul>
      <Button className="md:hidden flex w-6 h-6">
        <Image src="/icons/Arrow Icon.png" alt="" width="8" height="12"/>
      </Button>
    </div>
  );
};

export default FooterLayouts;
