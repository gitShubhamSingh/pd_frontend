"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


//
import theme from '@/app/Theme'

const AgentProfile = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">View Agent Profile</Typography>
    </ThemeProvider>
  )
}

export default AgentProfile