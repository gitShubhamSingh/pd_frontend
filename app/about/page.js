"use client"
import React from 'react';
import Banner from '@/components/about/Banner';
import WhatIsParadise from '@/components/about/WhatIsParadise';
import { usePathname } from "next/navigation";
import Mainfooter from '@/components/main-footer';
import History from '@/components/about/History';
import Tailblazers from '@/components/about/Tailblazers';
import Priniciple from '@/components/about/Priniciple';
import Question from '@/components/about/Question';
import { Typography } from '@mui/material';

const About = () => {
  const pathname = usePathname();
  
  // Exclude admin pages
  const isAdminPage = pathname.startsWith("/admin");
  

  return (
    <>
      <Typography variant='p' component="p" sx={{mt:30}}></Typography>
      <Banner/>
      <WhatIsParadise/>
      <History/>
      <Tailblazers/>
      <Priniciple/>
      <Question/>
      {!isAdminPage && <Mainfooter />}

    </>
  );
};

export default About;