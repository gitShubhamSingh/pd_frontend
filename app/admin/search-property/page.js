"use client"
import theme from '@/app/Theme'
import { ThemeProvider } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <ThemeProvider theme={theme}>
       <Typography variant='h3' component="p" sx={{mb:2, color:theme.palette.warning.main}}>Search Property</Typography>
       <Typography variant='h4' component="p"> Comming Soon..</Typography>
    </ThemeProvider>
  )
}

export default page