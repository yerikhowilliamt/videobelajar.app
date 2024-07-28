"use client";

import { useRouter } from "next/navigation";
import Button from "../Elements/Button/Button";
import InputLabel from "../Elements/Input/InputLabel";
import Link from "next/link";
import { toast } from "sonner";

const FormLogin = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Berhasil Login");

    setTimeout(() => {
      router.push("/beranda");
    }, 2000);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register");
  };
  return (
    <form className="w-full flex flex-col gap-6 items-center justify-between">
      <InputLabel
        className="after:content-['*'] after:ml-0.5 after:text-red-500 md:text-body-medium text-body-small font-body"
        name="email"
        type="email"
        label="E-Mail"
      />
      <InputLabel
        className="after:content-['*'] after:ml-0.5 after:text-red-500 md:text-body-medium text-body-small font-body"
        name="password"
        type="password"
        label="Kata Sandi"
        src="/icons/eye-off icon.png"
        width={24}
        height={24}
        alt="Eyes-off"
      />
      <Link
        className="text-body-medium text-dark-primary font-body font-medium ml-auto cursor-pointer"
        href="/lupa-password"
      >
        Lupa Password?
      </Link>
      <Button
        onClick={() => handleSubmit}
        className="w-full bg-main-primary text-light-primary text-body-medium font-body font-bold p-2 rounded-xl"
      >
        Masuk
      </Button>
      <Button
        onClick={() => handleRegister}
        className="w-full bg-main-primary-100 text-primary text-body-medium font-body font-bold p-2 rounded-xl"
      >
        Daftar
      </Button>
      <span className="before:content[''] before:block before:h-0.5 before:bg-gray-300 after:content[''] after:block after:h-0.5 after:bg-gray-300 grid text-center grid-cols-3 items-center w-full">
        atau
      </span>
      <Button
        className="w-full flex justify-center items-center gap-2 text-body-medium font-body font-bold p-2 border rounded-xl text-[#4A505C]"
        src="/icons/Google icon.png"
        width={15}
        height={20}
        alt="Google Logo"
      >
        Masuk dengan Google
      </Button>
    </form>
  );
};

export default FormLogin;
