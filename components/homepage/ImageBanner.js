import React from 'react'
import { Button, Container, Grid2, ThemeProvider, Typography } from '@mui/material'

import theme from '@/app/Theme'


// import Image
import Banner5 from '@/assets/banner/banner5.jpg'

const ImageBanner = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="xlg" sx={{
             backgroundImage: `url(${Banner5.src})`,
             backgroundSize: 'cover', // Makes the image cover the entire container
             backgroundPosition: 'center', // Centers the image
             backgroundRepeat: 'no-repeat', // Prevents the image from repeating
             height: '90vh', // Sets the height of the container (adjust as needed)
             display: 'flex',
             flexDirection:'column',
             justifyContent: 'flex-end',
            //  alignItems: 'flex-end',
             color: '#fff', // Optional: Text color to contrast with the background
            // overflow: 'hidden',
            filter: 'brightness(0.8)',
            boxShadow:10
        }}>
            <Container >
                <Typography variant='h1' component="h1" fontSize={100}>We are Here</Typography>
                <Typography variant='h1' component="h1" sx={{mb:5}}>for You</Typography>

                <Typography variant='h3' component="h3">150+</Typography>
                <Typography variant='h6' component="h6">Property Available</Typography>
            </Container>
            
            <Container 
                sx={{
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    mt:1,mb:5
                }}
            >
                <Button variant='outlined' sx={{color:"#fff", borderColor:"#fff", borderRadius:10, ml:1, mt:{xs:1}}}>Home</Button>
                <Button variant='outlined' sx={{color:"#fff", borderColor:"#fff", borderRadius:10, ml:1, mt:{xs:1}}}>Purchase</Button>
                <Button variant='outlined' sx={{color:"#fff", borderColor:"#fff", borderRadius:10, ml:1, mt:{xs:1}}}>Rent</Button>
            </Container>
           
            
        </Container>
    </ThemeProvider>
  )
}

export default ImageBanner