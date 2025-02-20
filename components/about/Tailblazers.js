import { Container, ThemeProvider, Typography, Box, Button } from '@mui/material'
import React from 'react'


// theme
import theme from '@/app/Theme'
import Banner2 from '@/assets/banner/banner2.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Tailblazers = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{textAlign:'center', mt:10, mb:10, p:10}}>
            <Typography variant='h4' component="p" fontWeight="bold">Every solution we provide plays a vital role in strengthening the connections that drive success in the real estate industry — and that success can be leveraged to create meaningful and lasting impact.</Typography>
       
            <Box sx={{mt:3, p:{xs:1, sm:10}}}>
                <Image src={Banner2.src} layout='responsive' width="100" height="100" alt="banner"/>
            </Box>

            <Typography variant='h3' component="p" sx={{mt:10}}>We are Visionaries.</Typography>
            <Typography variant='p' component="p" sx={{mt:4, textAlign:'center', pl:{xs:5, md:10},pr:{xs:5, md:10}}} >We’re not just another company — and that’s intentional. At Paradise, we call our community of employees, clients, and partners "Visionaries." Visionaries across the real estate sector collaborate, innovate, and support one another to learn, grow, and achieve success together.</Typography>

            <Button variant='contained' size='large' sx={{textTransform:'none', mt:10}} component={Link} href="/contact">Contact Us Today !</Button>
        </Container>
    </ThemeProvider>
  )
}

export default Tailblazers