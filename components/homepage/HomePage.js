"use client"
import React from 'react'
import FeaturedListing from './FeaturedListing'
import { usePathname } from "next/navigation";
import Mainfooter from '@/components/main-footer';
import InquiryForm from './InquiryForm';
import Testimonials from './Testimonials';

import Banner from './Banner';
import ImageBanner from './ImageBanner';

const HomePage = () => {

  const pathname = usePathname();
  
  // Exclude admin pages
  const isAdminPage = pathname.startsWith("/admin");
  

  return (
    <>
      <Banner/>
      <ImageBanner/>
      <FeaturedListing/>
      <InquiryForm/>
      <Testimonials/>
      {!isAdminPage && <Mainfooter />}
    </>
  )
}

export default HomePage