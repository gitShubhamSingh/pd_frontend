"use client"
import { ThemeProvider } from '@emotion/react'
import React from 'react'


// 
import theme from '@/app/Theme'
import { Typography } from '@mui/material'

const PerformanceAgent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Track Performance Agent</Typography>
    </ThemeProvider>
  )
}

export default PerformanceAgent