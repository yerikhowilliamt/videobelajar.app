import BannerLayouts from "@/components/Layouts/BannerLayouts";
import CardLayouts from "@/components/Layouts/CardLayouts";
import FooterLayouts from "@/components/Layouts/FooterLayouts";
import HeaderLayouts from "@/components/Layouts/HeaderLayouts";
import MainLayouts from "@/components/Layouts/MainLayouts";

const BerandaPage = () => {
  return (
    <>
      <HeaderLayouts page="authenticated" type="product"/>
      <MainLayouts gap="md:gap-16 gap-6">
        <BannerLayouts type="course" src="/images/background-course.jpeg" alt="background image"/>
        <CardLayouts />
        <BannerLayouts type="newsletter" src="/images/background-newsletter.jpeg" alt="background image"/>
      </MainLayouts>
      <FooterLayouts/>
    </>
  );
}

export default BerandaPage;