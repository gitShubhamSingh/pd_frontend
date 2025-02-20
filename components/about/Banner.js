"use client"
import React from 'react'
import { ButtonGroup, Container, ThemeProvider, Typography, Button } from '@mui/material';
import theme from '@/app/Theme';


// icons
import Brightness7Icon from '@mui/icons-material/Brightness7';

// image
import Logo from '@/assets/logo.png'
import Image from 'next/image';

const Banner = () => {

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{textAlign:"center", mt:10}}>
            <Typography variant='h1' component="h1" sx={{color:theme.palette.primary.main}}>
                We're Paradise
            </Typography>
            <Typography variant='h3' component="h3" sx={{mt:2}}>
                the #1 Real Estate Solutions Provider
            </Typography>
            
            <Typography variant='p' component="p" sx={{mt:5}}>
                Since our establishment, we’ve had a singular focus — empowering the real estate sector with innovative solutions that streamline operations and enhance client satisfaction. Our expertise enables property professionals to manage portfolios efficiently, close deals faster, and deliver exceptional services. It’s no surprise, then, that countless real estate businesses trust Paradise to drive their success and growth.
            </Typography>
            {/* <Brightness7Icon sx={{mt:10, fontSize:200, color:theme.palette.secondary.light}}/> */}
            <Typography  sx={{mt:10}}></Typography>
            <Image src={Logo.src} width="100" height="100" alt="paradise_logo"></Image>
            <Typography variant='h3' component="h3" sx={{mt:5}}>
                We're innovating our way into customers' hearts.
            </Typography>

        </Container>
 </ThemeProvider>
  )
}

export default Banner