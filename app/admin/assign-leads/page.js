"use client"
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

//
import theme from '@/app/Theme'

const AssignLeads = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Assign Leads</Typography>
    </ThemeProvider>
  )
}

export default AssignLeads