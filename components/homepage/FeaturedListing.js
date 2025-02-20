'use client'
import React from 'react'
import theme from '@/app/Theme'

import { Button, Container, Grid2, ThemeProvider, Typography, Box} from '@mui/material'
import Grid from '@mui/material/Grid2';
import Link from 'next/link';


const FeaturedListing = () => {

   
  return (
    <ThemeProvider theme={theme}>
        <Container sx={{pt:30, pb:20}}>
          
          <Grid2 container>
            <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{p:1}}>
                <Typography variant='h3' component="h3" sx={{mb:1}}>
                    Find the Most
                </Typography>
                <Typography variant='h3' component="h3" sx={{mb:1}}>
                    Comfortable Residence
                </Typography>
                <Typography variant='h3' component="h3" sx={{mb:1}}>
                    Near For You
                </Typography>
                <Typography variant='p' component="p" sx={{mt:3,mb:5}}>Explore residences designed for comfort and convenience.
                Find the perfect place near you that feels like home.</Typography>
                <Button variant='contained' size="small" sx={{pl:2,pr:2,pt:1,pb:1, mr:2, textTransform:"none",borderRadius:10}} component={Link} href="/properties">Nearest Residence</Button>
                <Button variant='outlined' size="small" sx={{pl:2,pr:2,pt:1,pb:1, textTransform:"none", borderRadius:10}} component={Link} href="/properties">View Property</Button>
                
            </Grid2>
            <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{pt:{xs:10, md:0}}}>
              <Box sx={{boxShadow:12}}>
                <center>
                  <div style={{ width: "100%", height: "500px" }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2217.3393850025027!2d72.83360429802586!3d19.216387296291025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ec567f2791%3A0x87ddcaff3956f10c!2sParadise%20Consultant!5e1!3m2!1sen!2sin!4v1737267343579!5m2!1sen!2sin" 
                      width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </center>
              </Box>
            </Grid2>
          </Grid2>
          
        </Container>
    </ThemeProvider>
  )
}

export default FeaturedListing