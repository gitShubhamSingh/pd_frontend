"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import theme from '@/app/Theme'

const Update = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="h3" sx={{mb:2, color:theme.palette.info.main}}>Update Properties</Typography>
        <Typography variant='p' component="p" sx={{mb:3}}>Select Properties which you want to update.</Typography>
        <Typography variant='h4' component="p"> Comming Soon..</Typography>
    </ThemeProvider>
  )
}

export default Update