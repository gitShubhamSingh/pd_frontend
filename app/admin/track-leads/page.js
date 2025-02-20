"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

import theme from '@/app/Theme'

const TrackLeads = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Track Leads</Typography>
    </ThemeProvider>
  )
}

export default TrackLeads