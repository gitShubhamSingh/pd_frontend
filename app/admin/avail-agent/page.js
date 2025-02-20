"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


//
import theme from '@/app/Theme'

const AvailableAgent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Available Agents.</Typography>
    </ThemeProvider>
  )
}

export default AvailableAgent