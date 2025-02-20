"use client"
import { ThemeProvider, Typography } from '@mui/material'

import React from 'react'

//
import theme from '@/app/Theme'

const AllLeads = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">All Leads</Typography>
    </ThemeProvider>
  )
}

export default AllLeads