import StepperMetode from "@/components/Containers/StepperMetode";
import FooterLayouts from "@/components/Layouts/FooterLayouts";
import HeaderLayouts from "@/components/Layouts/HeaderLayouts";
import MainLayouts from "@/components/Layouts/MainLayouts";
import MetodeLayout from "@/components/Layouts/MetodeLayout";

const MetodePage = () => {
  return (
    <>
      <HeaderLayouts type="product" page="metode" />
      <MainLayouts gap="md:gap-16 gap-6">
        <StepperMetode/>
        <MetodeLayout/>
      </MainLayouts>
      <FooterLayouts display="flex md:hidden"/>
    </>
  );
};

export default MetodePage;
