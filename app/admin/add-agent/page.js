"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

import Form from './Form'

import theme from '@/app/Theme'

const AddAgent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p" sx={{mb:2}}>Add Agent</Typography>
        <Typography variant='p' component="p" sx={{mb:3}}>Please Enter the Following Agent Details and Click on <b>&#39Add&#39</b> Button to list the Agent.</Typography>
       
        <Form/>
    </ThemeProvider>
  )
}

export default AddAgent