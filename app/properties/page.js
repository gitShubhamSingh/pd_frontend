"use client"
import React from 'react'
import PropertiesPage from '@/components/propertiespage/PropertiesPage'
import Mainfooter from '@/components/main-footer';
import { usePathname } from "next/navigation";
import { Box, ThemeProvider } from '@mui/material';
import theme from '../Theme';


const Properties = () => {
  const pathname = usePathname();
  
  // Exclude admin pages
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{mt:20}}></Box>
      <PropertiesPage/>

      {!isAdminPage && <Mainfooter />}
    </ThemeProvider>
  )
}

export default Properties