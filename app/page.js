"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import HomePage from '@/components/homepage/HomePage'
import Mainfooter from '@/components/main-footer'
import theme from './Theme'


const Home = () => {
  return (
   <ThemeProvider theme={theme}>
    <Typography variant='p' component="p" sx={{mt:20}}></Typography>
    <HomePage/>
   </ThemeProvider>
  )
}

export default Home