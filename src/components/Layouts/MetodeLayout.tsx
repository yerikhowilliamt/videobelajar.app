import React from "react";
import CardMetode from "../Containers/CardMetode";
import CartMetode from "../Containers/CartMetode";

const MetodeLayout = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-9">
      <CardMetode />
      <CartMetode page="metode" />
    </div>
  );
};

export default MetodeLayout;
