"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


import theme from '@/app/Theme'

const CommisionAgent = () => {

  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">
            Agent Commisions
        </Typography>
    </ThemeProvider>
  )
}

export default CommisionAgent