import Breadcrumbs from '@/components/Containers/Breadcrumbs'
import BannerLayouts from '@/components/Layouts/BannerLayouts'
import DetailLayouts from '@/components/Layouts/DetailLayouts'
import FooterLayouts from '@/components/Layouts/FooterLayouts'
import HeaderLayouts from '@/components/Layouts/HeaderLayouts'
import MainLayouts from '@/components/Layouts/MainLayouts'
import React from 'react'

const DetailPage = () => {
  return (
    <>
      <HeaderLayouts page="authenticated" type="product"/>
      <MainLayouts gap="gap-9">
        <Breadcrumbs />
        <BannerLayouts type="uiux" src="/images/background-course.jpeg" alt='background image'/>
        <DetailLayouts />
      </MainLayouts>
      <FooterLayouts />
    </>
  )
}

export default DetailPage;