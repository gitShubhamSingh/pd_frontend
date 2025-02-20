"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


//
import theme from '@/app/Theme'

const AssignAgentProperty = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Assign Property to Agent</Typography>
    </ThemeProvider>
  )
}

export default AssignAgentProperty