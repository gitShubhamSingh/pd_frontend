"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

//
import theme from '@/app/Theme'

const AnalyticsLead = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Lead Analytics</Typography>
    </ThemeProvider>
  )
}

export default AnalyticsLead