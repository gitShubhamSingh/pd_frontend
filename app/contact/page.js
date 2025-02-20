"use client"
import { Typography } from '@mui/material'
import React from 'react'
import Form from '@/components/contact/Form'
import { usePathname } from "next/navigation";
import Mainfooter from '@/components/main-footer';

const Contact = () => {
  const pathname = usePathname();
  
  // Exclude admin pages
  const isAdminPage = pathname.startsWith("/admin");
  
  return (
    <>
      <Form/>
      {!isAdminPage && <Mainfooter />}
    </>
  )
}

export default Contact