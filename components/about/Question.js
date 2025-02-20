import { Button, Container, Grid2, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'

// theme
import theme from '@/app/Theme'
import question from '@/assets/about/question.png'
import Image from 'next/image'

const Question = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{mt:20, mb:20}}>
            <Grid2 container>
                <Grid2 size={{xs:12, sm:6, md:6, lg:6}} sx={{pl:{xs:5}, pr:{xs:5}}}>
                    <Typography variant='h4' component="p" sx={{fontWeight:'bold'}}>Questions? We’ll guide you to the right solution.</Typography>
                    <Typography variant='p' component="p" sx={{mt:3}}>Whether it’s about our real estate solutions, pricing, implementation, or anything else, our expert team is ready to assist and provide the support you need.</Typography>
                    <Button variant='contained' sx={{mt:3, textTransform:'none'}} component={Link} href="/contact" >Contact Us Today !</Button>
                </Grid2>
                <Grid2 size={{xs:12, sm:6, md:6, lg:6}} sx={{pl:{xs:5, md:0}, pr:{xs:5, md:0}, pb:5, pt:{xs:5, sm:0}}}>
                    <Image src={question.src} layout='responsive' width="100" height="100" alt="question"/>
                </Grid2>
            </Grid2>
        </Container>
    </ThemeProvider>
  )
}

export default Question