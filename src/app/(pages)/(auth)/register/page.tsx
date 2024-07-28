import FormRegister from "@/components/Containers/FormRegister";
import FormLayouts from "@/components/Layouts/FormLayouts";
import HeaderLayouts from "@/components/Layouts/HeaderLayouts";
import MainLayouts from "@/components/Layouts/MainLayouts";
import { Toaster } from "sonner";

const RegisterPage = () => {
  return (
    <>
      <HeaderLayouts />
      <MainLayouts items="items-center">
        <FormLayouts
          title="Pendaftaran Akun"
          description="Yuk, daftarkan akunmu sekarang juga!"
        >
          <FormRegister />
        </FormLayouts>
      </MainLayouts>
      <Toaster richColors/>
    </>
  );
};

export default RegisterPage;
