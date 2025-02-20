"use client"
import { Typography, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '@/app/Theme'
import Form from './Form'


const Add = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p" sx={{mb:2}}>Add Properties</Typography>
        <Typography variant='p' component="p" sx={{mb:3}}>Please Enter the Following Property Details and Click on <b>'Add'</b> Button to list the property on the <b>'/properties'</b> page.</Typography>
        <Form/>
    </ThemeProvider>
  )
}

export default Add