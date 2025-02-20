import React from 'react'
import { Container, Grid2, ThemeProvider, Typography } from '@mui/material'

import theme from '@/app/Theme'
import Image from 'next/image'

import Banner1 from '@/assets/banner/banner5.jpg'

const WhatIsParadise = () => {

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{mt:15, mb:15}}>
            <Grid2 container>
                <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{p:5}}>
                    <Typography variant='h3' component="h4" sx={{mb:2}}>
                        What is Paradise?
                    </Typography>
                    <Typography variant='p' component="p">
                        Paradise is a leading provider of cutting-edge real estate solutions designed to transform the way businesses operate in the property sector. Our mission is to empower real estate professionals, property managers, and businesses with tools and strategies that simplify complex processes, improve efficiency, and enhance client relationships.
                    </Typography>
                    <Typography variant='p' component="p" sx={{mt:2}}>
                        From advanced property management systems to tailored solutions for sales, marketing, and analytics, Paradise bridges the gap between technology and real estate. By leveraging innovative approaches and a deep understanding of the industry, we help our clients succeed in a competitive landscape.
                    </Typography>
                    <Typography variant='p' component="p" sx={{mt:2}}>
                        At Paradise, we believe in creating opportunities, fostering growth, and delivering excellence — making us the trusted partner for real estate businesses worldwide.
                    </Typography>
                </Grid2>
                <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{p:{xs:5,md:2}, mt:{xs:6, md:0}}}>
                    <Image 
                        src={Banner1.src}
                        layout='responsive'
                        width="100"
                        height="100"
                        alt="grid-image"
                    />
                </Grid2>
            </Grid2>
        </Container>
    </ThemeProvider>
  )
}

export default WhatIsParadise