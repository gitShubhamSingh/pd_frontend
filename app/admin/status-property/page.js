"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


//
import theme from '@/app/Theme'

const PropertyStatus = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Property Status</Typography>
    </ThemeProvider>
  )
}

export default PropertyStatus