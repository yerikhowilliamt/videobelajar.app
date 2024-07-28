import FormLogin from "@/components/Containers/FormLogin";
import FormLayouts from "@/components/Layouts/FormLayouts";
import HeaderLayouts from "@/components/Layouts/HeaderLayouts";
import MainLayouts from "@/components/Layouts/MainLayouts";
import { Toaster } from "sonner";

const LoginPage = () => {
  return (
    <>
      <HeaderLayouts />
      <MainLayouts items="items-center">
        <FormLayouts
          title="Masuk ke Akun"
          description="Yuk, lanjutin belajarmu di videobelajar"
        >
          <FormLogin />
        </FormLayouts>
      </MainLayouts>
      <Toaster richColors/>
    </>
  );
};

export default LoginPage;
