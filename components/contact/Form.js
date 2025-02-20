"use client"
import { Container, Grid2, TextField, ThemeProvider, MenuItem, Typography, Button } from '@mui/material'
import React from 'react'


// theme
import theme from '@/app/Theme'

const Form = () => {

  const currencies = [
    {
      value: 'purchase',
      label: 'Purchase',
    },
    {
      value: 'rent',
      label: 'Rent',
    },
    {
      value: 'sell',
      label: 'Sell',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ];

  const ima = [
    {
      value: 'realestate',
      label: "I'm a Real Estate Agent ",
    },
    {
      value: 'owner',
      label: "I'm a Property Owner",
    }
  ];

  
  const it = [
    {
      value: 'commercial',
      label: 'Commercial',
    },
    {
      value: 'apartment',
      label: 'Apartment',
    },
    {
      value: 'family',
      label: 'Family',
    },
    {
      value: 'studio',
      label: 'Studio',
    },
    {
      value: 'villa',
      label: 'Villa',
    },
    
  ];
  

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{mt:20,pl:10,pr:10, mb:20}}>
          <Typography variant='h4' component="p">Contact Us Today !</Typography>
          <Typography variant='p' component="p" sx={{mt:3,mb:2}}>Looking for your dream property? Fill out our quick inquiry form and let us know your requirements. Our experts will get in touch with you to provide tailored solutions for your real estate needs. Your perfect property is just a few clicks away!</Typography>
            <Grid2 container>
              <Grid2 size={{xs:12, sm:12,md:12,lg:12}} sx={{mt:3}}>
                  <TextField 
                    id="name" 
                    select
                    variant='outlined' 
                    label="Inquiry type"
                    fullWidth
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:12,lg:12}} sx={{mt:3}}>
                  <TextField 
                    id="type" 
                    select
                    variant='outlined' 
                    label="I'm a"
                    fullWidth
                    >
                      {ima.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:6,lg:6}} sx={{mt:3,pr:{xs:0, sm:0, md:1}}}>
                  <TextField 
                    id="firstname" 
                    variant='outlined' 
                    label="First Name"
                    fullWidth
                    >
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:6,lg:6}} sx={{mt:3,pl:{xs:0, sm:0, md:1}}}>
                  <TextField 
                    id="lastname" 
                    variant='outlined' 
                    label="Last Name"
                    fullWidth
                    >
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:6,lg:6}} sx={{mt:3,pr:{xs:0, sm:0, md:1}}}>
                  <TextField 
                    id="email" 
                    variant='outlined' 
                    label="Email"
                    fullWidth
                    >
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:6,lg:6}} sx={{mt:3,pl:{xs:0, sm:0, md:1}}}>
                  <TextField 
                    id="mobile" 
                    variant='outlined' 
                    label="Mobile Number"
                    fullWidth
                    >
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:12,lg:12}} sx={{mt:3}}>
                  <TextField 
                    id="inquirytype" 
                    select
                    variant='outlined' 
                    label="Inquiry Type"
                    fullWidth
                    >
                      {it.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
              </Grid2>
              <Grid2 size={{xs:12, sm:12,md:12,lg:12}} sx={{mt:3}}>
                 <Button variant='contained' sx={{textTransform:"none", pl:3,pr:3}}>Submit</Button>
              </Grid2>
            </Grid2>
        </Container>
    </ThemeProvider>
  )
}

export default Form