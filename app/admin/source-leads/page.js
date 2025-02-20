"use client"
import { ThemeProvider, Typography } from '@mui/material'

import React from 'react'

//
import theme from '@/app/Theme'
const SourceLeads = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Leads Source</Typography>
    </ThemeProvider>
  )
}

export default SourceLeads