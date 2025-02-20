"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


//
import theme from '@/app/Theme'

const LeadsLimitAgent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Set Leads Limit</Typography>
    </ThemeProvider>
  )
}

export default LeadsLimitAgent