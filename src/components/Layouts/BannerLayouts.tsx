import Image from "next/image";
import BannerProduct from "../Containers/BannerProduct";
import Button from "../Elements/Button/Button";

type BannerLayoutsProps = {
  type?: string;
  src: string;
  alt: string;
}

const BannerLayouts = ({ type, src, alt }: BannerLayoutsProps) => {
  return (
    <BannerProduct src={src} alt={alt}>
      {type === "uiux" ? <UiUx/> : type === "course" ? <CourseBanner/> : <NewsletterBanner/>}
    </BannerProduct>
  );
};

const CourseBanner = () => {
  return (
    <div className="absolute md:top-22 top-26 flex flex-col gap-6 items-center">
      <div className="md:w-[920px] w-[280px] flex flex-col gap-3">
        <h1 className="md:text-h1 text-h4 font-heading font-bold text-center text-light-primary leading-[26.4px] md:leading-[52.8px]">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-body-medium font-body font-medium text-center text-light-primary leading-[19.6px]">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
      </div>
      <Button className="md:w-[369px] w-[280px] md:h-[42px] h-[40px] bg-main-primary text-light-primary md:text-body-medium text-body-small font-bold rounded-lg">
        Temukan Video Course untuk Dipelajari
      </Button>
    </div>
  );
};

const NewsletterBanner = () => {
  return (
    <div className="absolute top-20 w-[280px] md:w-[525px] flex flex-col gap-10">
      <div className="w-[280px] md:w-[525px] flex flex-col gap-1 p-2 ">
        <span className="text-body-large text-center font-body font-medium text-light-secondary">
          NEWSLETTER
        </span>
        <h3 className="md:text-h3 text-h4 font-heading font-bold text-center text-light-primary leading-[26.4px] md:leading-[35.2px]">
          Mau Belajar Lebih Banyak?
        </h3>
        <p className="md:text-body-medium text-body-small font-body font-medium text-center text-light-primary leading-[19.6px] md:leading-[22.4px]">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
      </div>
      <div className="w-full h-[58px] flex gap-5 py-2 pr-2 md:pl-8 pl-3 rounded-lg bg-white">
        <input
          type="email"
          name="email"
          id="email"
          className="w-full h-full border-none rounded-lg placeholder-dark-secondary md:text-body-medium text-body-small font-body justify-start"
          placeholder="Masukan Emailmu"
        />
        <Button className="w-[123px] md:w-[132px] h-10 md:h-42px py-2.5 px-[26px] md:text-body-medium text-body-small font-bold text-light-primary bg-main-secondary rounded-lg">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const UiUx = () => {
  return (
    <div className="absolute top-10 md:top-24 2xl:top-24 left-5 md:left-[7rem] 2xl:left-52 w-[280px] md:w-[525px] flex flex-col justify-center">
      <div className="w-[280px] md:w-[900px] flex flex-col gap-3 p-2">
        <h2 className="text-h4 md:text-h2 text-light-primary font-heading font-semibold leading-[33.6px] md:leading-[44px]">
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
        </h2>
        <p className="text-body-medium text-light-primary font-body font-medium">
          Belajar bersama tutor profesional di Video Course. <br />
          Kapanpun, di manapun.
        </p>
      </div>
      <div className="flex md:h-6 mt-4">
        <Image src="/icons/Rating.png" alt="" width={120} height={24}/>
        <span className="border-b-2 font-medium text-light-secondary">
          3.5 (86)
        </span>
      </div>
    </div>
  );
};

export default BannerLayouts;
