import FooterLayouts from '@/components/Layouts/FooterLayouts'
import HeaderLayouts from '@/components/Layouts/HeaderLayouts'
import MainLayouts from '@/components/Layouts/MainLayouts'
import React from 'react'

const CartPage = () => {
  return (
    <>
      <HeaderLayouts type="product"/>
      <MainLayouts gap="md:gap-16 gap-6">
      </MainLayouts>
      <FooterLayouts/>
    </>
  )
}

export default CartPage