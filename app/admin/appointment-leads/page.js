"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

//
import theme from '@/app/Theme'

const AppointmentLeads = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Appointment Leads</Typography>
    </ThemeProvider>
  )
}

export default AppointmentLeads