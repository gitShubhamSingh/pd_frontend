'use client'
import React from 'react'
import theme from '@/app/Theme'
import { ThemeProvider, Typography } from '@mui/material'
import DataGridComponent from './DataGridComponent'


const AllProperties = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3' component="p" sx={{mb:2, color:theme.palette.success.main}}>All Properties</Typography>
        <Typography variant='p' component="p" sx={{mb:3}}>Here are the list of your all properties.</Typography>
        <DataGridComponent/>
    </ThemeProvider>
  )
}

export default AllProperties