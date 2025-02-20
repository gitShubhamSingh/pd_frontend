"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'


// theme
import theme from '@/app/Theme'

const AssignAgent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Assign Properties to Agent</Typography>
    </ThemeProvider>
  )
}

export default AssignAgent