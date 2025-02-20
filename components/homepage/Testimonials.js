import React from 'react'
import theme from '@/app/Theme'
import { Box, Container, Grid2, ThemeProvider, Typography } from '@mui/material'


// importing Image
import rv1 from '@/assets/testimonials/review_1.png'
import rv2 from '@/assets/testimonials/review_2.png'
import rv3 from '@/assets/testimonials/review_3.png'
import rv4 from '@/assets/testimonials/review_4.png'
import rv5 from '@/assets/testimonials/review_5.png'
import rv6 from '@/assets/testimonials/review_6.png'
import Image from 'next/image'

const Testimonials = () => {

  const items = [
    {
      rv:rv1
    },
    {
      rv:rv2
    },
    {
      rv:rv3
    },
    {
      rv:rv4
    },
    {
      rv:rv5
    },
    {
      rv:rv6
    },
    
  ]
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{mt:20, mb:20}}>
            <Typography variant='h3' component="p" sx={{textAlign:"center"}}>Testimonials</Typography>

            <Grid2 container sx={{mt:10}}>
              {items.map((item, key)=>
                <Grid2 size={{xs:12, sm:6, md:4, lg:4}} key={key}>
                  <Box sx={{m:2, boxShadow:5}}>
                    <Image
                      layout='responsive'
                      src={item.rv.src}
                      alt="item.rv"
                      width="210"
                      height="210"
                    />
                  </Box>
                </Grid2>
              )}
            </Grid2>
            

        
        
        </Container>
    </ThemeProvider>
  )
}

export default Testimonials