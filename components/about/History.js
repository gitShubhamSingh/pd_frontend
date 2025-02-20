"use client"
import React from 'react'

import { Button, Container, Grid2, List, ListItem, ListItemAvatar, ListItemText, ThemeProvider, Typography, Box } from '@mui/material'


// icons
import VerifiedIcon from '@mui/icons-material/Verified';
import timeline from '@/assets/about/timeline.png'

import theme from '@/app/Theme'
import Image from 'next/image';
import Link from 'next/link';
const History = () => {

    const items = [
        {
            primary:'2005',
            secondary:'Paradise is founded, introducing cutting-edge solutions to revolutionize the real estate industry.'
        },
        {
            primary:'2010',
            secondary:'Paradise launches its Property Management System, streamlining portfolio management and simplifying operations for property professionals.'
        },
        {
            primary:'2015',
            secondary:'Paradise recognized as a leading innovator in real estate technology, empowering businesses with advanced analytics and reporting tools.'
        },
        {
            primary:'2018',
            secondary:'AI-powered solutions debut, offering predictive insights, market trends analysis, and personalized client experiences.'
        },
        {
            primary:'2024',
            secondary:'Paradise redefines the industry with SmartAgent — an intelligent assistant that works 24/7, automates tasks, provides actionable insights, and seamlessly integrates with human expertise.'
        }
    ]

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{display:{xs:'none', md:'block'}}}>
            <Grid2 container>
                <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{p:8}}> 
                    <Image src={timeline.src} layout='responsive' width="100" height="100" alt="timeline"/>
                </Grid2>
                <Grid2 size={{xs:12, sm:12, md:6, lg:6}}> 
                    <Typography variant='h3' component="h4">A History That Put Clients First</Typography>

                    <List sx={{mt:2}}>
                        {items.map((item, key)=> 
                            <ListItem key={key} alignItems="flex-start">
                                <ListItemAvatar>
                                    <VerifiedIcon sx={{ fontSize: 40, color: 'primary.main' }}/>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.primary} 
                                    secondary={item.secondary}
                                    slotProps={{
                                        primary: {
                                        style: {
                                            fontSize: '1.8rem', // Increase primary font size
                                            fontWeight: 'bold', // Optional: Make it bold
                                        },
                                        },
                                        secondary: {
                                        style: {
                                            fontSize: '1rem', // Increase secondary font size
                                            color: 'text.secondary', // Optional: Change color
                                        },
                                        },
                                    }}
                                    ></ListItemText>
                            </ListItem>
                        )}
                    </List>
                    <Button variant='contained' sx={{mt:5, mb:5, textTransform:'none', fontSize:17, pt:1, pb:1, pl:4, pr:4}} component={Link} href="/properties">See All Properties</Button>
                </Grid2>
            </Grid2>
           
        </Container>
        <Container maxWidth="lg" sx={{display:{xs:'block', md:'none'}}} >
            <Grid2 container>
                <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{p:8}}> 
                    <Typography variant='h3' component="h4">A History That Put Clients First</Typography>

                    <List sx={{mt:2}}>
                        {items.map((item, key)=> 
                            <ListItem key={key} alignItems="flex-start">
                                <ListItemAvatar>
                                    <VerifiedIcon sx={{ fontSize: 40, color: 'primary.main' }}/>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.primary} 
                                    secondary={item.secondary}
                                    slotProps={{
                                        primary: {
                                        style: {
                                            fontSize: '1.8rem', // Increase primary font size
                                            fontWeight: 'bold', // Optional: Make it bold
                                        },
                                        },
                                        secondary: {
                                        style: {
                                            fontSize: '1rem', // Increase secondary font size
                                            color: 'text.secondary', // Optional: Change color
                                        },
                                        },
                                    }}
                                    ></ListItemText>
                            </ListItem>
                        )}
                    </List>
                    
                    <Button variant='contained' sx={{mt:5, mb:5, textTransform:'none', fontSize:17, pt:1, pb:1, pl:4, pr:4}} component={Link} href="/properties">See All Properties</Button>
                
                </Grid2>
                <Grid2 size={{xs:12, sm:12, md:6, lg:6}} sx={{p:8}}> 
                    
                    <Image src={timeline.src} layout='responsive' width="100" height="100" alt="timeline"/>
                    
                
                    
                </Grid2>
            </Grid2>
        </Container>
    </ThemeProvider>
  )
}

export default History