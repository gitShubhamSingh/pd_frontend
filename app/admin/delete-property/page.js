"use client"
import theme from '@/app/Theme'
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import DataGridComponent from './DataGridComponent'

const Delete = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography variant='h3'component="h3" sx={{mb:2,color:theme.palette.secondary.main}}>Delete Properties</Typography>
        <Typography variant='p' component="p" sx={{mb:3}}>Click on Delete button to simply delete the property</Typography>
        
        {/* Data Grid */}
        <DataGridComponent/>
    </ThemeProvider>
  )
}

export default Delete