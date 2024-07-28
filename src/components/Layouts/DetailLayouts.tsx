import CardProduct from "../Containers/CardProduct";
import CartProduct, { CartProductBuyButton, CartProductFooter, CartProductHeader, CartProductHero } from "../Containers/CartProduct";
import DescProduct from "../Containers/DescriptionProduct";

const DetailLayouts = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row gap-9">
        <DescProduct />
        <div className="w-full h-full md:w-5/12 p-5 md:p-6 bg-white rounded-lg border">
        <CartProduct width="w-full">
          <CartProductHeader/>
          <CartProductBuyButton/>
          <CartProductHero/>
          <CartProductFooter/>
        </CartProduct>
        </div>
      </div>
      <DetailCardSection />
    </>
  );
};

const DetailCardSection = () => {
  const dataProduct = [
    {
      id: 1,
      img: "/images/img-07.png",
      avatar: "/avatars/Avatar-07.png",
    },
    {
      id: 8,
      img: "/images/img-08.png",
      avatar: "/avatars/Avatar-08.png",
    },
    {
      id: 9,
      img: "/images/img-09.png",
      avatar: "/avatars/Avatar-09.png",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-col">
        <h3 className="text-h3 text-dark-primary font-heading font-semibold">
          Video Pembelajaran Terkait Lainnya
        </h3>
        <p className="text-body-medium text-dark-secondary font-body">
          Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {dataProduct.map((product) => (
          <CardProduct
            key={product.id}
            productImage={product.img}
            avatar={product.avatar}
          ></CardProduct>
        ))}
      </div>
    </div>
  );
};

export default DetailLayouts;
