"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import PropertiesDetailsPage from '@/components/propertiesdetailspage/PropertiesDetailsPage'
import Mainfooter from '@/components/main-footer';
import { usePathname } from "next/navigation";


const PropertiesDetailPage = () => {
  const params = useParams(); 
  const propertiesSlug = params?.propertiesSlug; // Extract the slug from `params`

  
    const pathname = usePathname();
  
  // Exclude admin pages
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
        <PropertiesDetailsPage slug={propertiesSlug}/>
        {!isAdminPage && <Mainfooter />}
    </>
  )
}

export default PropertiesDetailPage