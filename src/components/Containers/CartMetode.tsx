import Image from 'next/image'
import React from 'react'
import CartProduct, { CartProductFooter, CartProductHeader, CartProductHero } from './CartProduct'

type CartMetodeProps = {
  page: string;
}

const CartMetode = ({page}: CartMetodeProps) => {
  return (
    <div className="bg-light-primary w-full md:w-5/12 h-full p-6 gap-6 flex flex-col items-center border rounded-[10px]">
    <Image
      src="/images/img-01.png"
      alt=""
      width={1500}
      height={1300}
      className="object-cover object-center w-full h-full hidden md:block"
    />
    <CartProduct>
      <CartProductHeader page={page}/>
      <CartProductHero />
      <CartProductFooter />
    </CartProduct>
  </div>
  )
}

export default CartMetode