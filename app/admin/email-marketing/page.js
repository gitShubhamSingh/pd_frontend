"use client"
import theme from '@/app/Theme'
import Form from '@/components/email-marketing/Form'
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


const EmailMarketing = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Email Marketing</Typography>
        <Typography variant='p' component="p">Email Marketing is going here.</Typography>
        
        <Form/>
    </ThemeProvider>
  )
}

export default EmailMarketing