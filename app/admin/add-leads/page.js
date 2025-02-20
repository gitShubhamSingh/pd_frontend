"use client"
import { ThemeProvider } from '@emotion/react'
import React from 'react'

//
import theme from '@/app/Theme'
import { Typography } from '@mui/material'

const AddLeads = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p">Add Leads</Typography>
    </ThemeProvider>
  )
}

export default AddLeads