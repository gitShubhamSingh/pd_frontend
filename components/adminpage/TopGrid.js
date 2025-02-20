import { Box, CardContent, Grid2, ThemeProvider, Typography } from '@mui/material'
import React from 'react'


// import theme
import theme from '@/app/Theme'

const TopGrid = () => {


    const items = [
        {
            id:1,
            number:'8k',
            title:'Total Leads',
            color:theme.palette.primary.main
        },
        {
            id:2,
            number:'100',
            title:'Total Properties',
            color:theme.palette.secondary.main
        },
        {
            id:3,
            number:'10',
            title:'Total Agents',
            color:theme.palette.info.main,
        },
        {
            id:4,
            number:'70',
            title:'Total Clients',
            color:theme.palette.warning.main
        },
        
    ]
  return (
    <ThemeProvider theme={theme}>
        <Grid2 container spacing={2}>
        {items.map((item, key)=>
            <Grid2 size={{xs:6, sm:6, md:4, lg:3}} key={key}>
                <Box sx={{border:1,borderRadius:3,boxShadow:3}}>
                    <CardContent>
                    <Typography gutterBottom sx={{ color: item.color, fontSize: 44 }}>
                        {item.number}
                    </Typography>
                    <Typography gutterBottom>{item.title}</Typography>
                    </CardContent>
                </Box>
                </Grid2> 
        )}
        </Grid2>
    </ThemeProvider>
  )
}

export default TopGrid