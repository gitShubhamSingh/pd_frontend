"use client"
import theme from '@/app/Theme'
import { Typography, ThemeProvider, Container, Button, List, ListItem, Divider, Box, IconButton, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'


//icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


const Mainfooter = () => {

    const footerItems = [
        {
          id:2,
          title:'Quick Links',
          content:[
            {
              id:2.1,
              title:"Home",
              link:'/'
            },
            {
              id:2.2,
              title:'Properties',
              link:'/properties'
            },
            {
              id: 2.3,
              title: 'About',
              component: '/about'
          },
          {
              id: 2.4,
              title: 'Contact',
              component: '/contact'
          },
          {
              id: 2.5,
              title: 'Testimonials',
              component: '/testimonials'
          },
          ]
        },
        {
          id:3,
          title:'Resources',
          content:[
                {
                  id: 3.1,
                  title: 'Documentation',
                  link: '/docs'
              }, 
              {
                id: 3.1,
                title: 'Terms and Conditions',
                link: '/terms-and-conditions'
            },
            {
                id: 3.2,
                title: 'Privacy Policy',
                link: '/privacy-policy'
            },
            {
                id: 3.3,
                title: 'Help Center',
                link: '/help'
            },
            {
                id: 3.4,
                title: 'Contact Us',
                link: '/contact'
            },
          ]
        }
      ]
      
      const socialItems = [
        {
            icon:<WhatsAppIcon/>,
            link:'https://wa.me/+919004533221?text=Hello%20I%20have%20Query%20Regarding%20Properties'
        },
        {
            icon:<InstagramIcon/>,
            link:'https://www.instagram.com/paradise_consultant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        },
        {
            icon:<YouTubeIcon/>,
            link:"https://www.youtube.com"
        },
        {
            icon:<FacebookIcon/>,
            link:"https://www.facebook.com/p/paradise_consultant-100088043652117/"
        },
        {
            icon:<LinkedInIcon/>,
            link:"https://www.linkedin.com/company/paradiseconsultant/?viewAsMember=true"
        },
       
        

      ]
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="xlg" sx={{backgroundColor:theme.palette.primary.main, p:{xs:2, sm:6},}}>
            <Container sx={{mt:7}}>

                <Grid container>
                    <Grid size={{xs:12, sm:12, md:7, lg:7}}>
                        <Image
                            src={Logo}
                            width={100}
                            height={100}
                            alt="Paradise logo"
                        ></Image>
                        <Typography variant='h4' component="p" sx={{color:theme.palette.background.paper}}>Paradise Consultant</Typography>
                        <Typography variant='p' component="p" sx={{mt:2, color:theme.palette.background.paper}}>D-06 / 606, Charkop Sector 6, <br/>Kandivali (W, Mumbai, Maharashtra - 400067</Typography>
                        <Typography variant='p' component="p" sx={{mt:2, color:theme.palette.background.paper, display:'flex', alignItems:'center'}}><AddIcCallIcon />&nbsp;&nbsp;+91 900-453-3221</Typography>
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:5, lg:5}}>
                        <Grid container sx={{mt:{xs:15, md:0}}}>
                            {footerItems.map((item, key1)=>
                                <Grid key={key1} size={{xs:6, sm:6, md:6, lg:6}}>
                                    <Typography variant='h6' sx={{ color:theme.palette.background.paper}}>{item.title}</Typography>
                                    <List>
                                        {item.content.map((item2, key2)=>
                                            <ListItem disablePadding key={key2}>
                                                
                                                <Button 
                                                    variant="none"                                                     
                                                    sx={{
                                                        fontSize:12,
                                                        textTransform:"none",
                                                        justifyContent:"flex-start",
                                                        textAlign:"left", 
                                                        color:theme.palette.background.paper,
                                                        "&:hover":{backgroundColor:theme.palette.primary.main}}}
                                                        >
                                                    {item2.title}
                                                </Button>
                                                
                                            </ListItem>
                                        )}
                                    </List>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>

            <Box sx={{mt:8}}>
                <Divider sx={{borderColor:'whitesmoke'}}/>
            </Box>

            <Grid container sx={{mt:2}}>
                <Grid size={{xs:12, sm:12, md:9, lg:9}}>
                    <Typography variant='p' component="p" sx={{mt:{xs:2},color:theme.palette.background.paper}}>
                        &copy; Paradise Consulting, 2025
                    </Typography>
                </Grid>
                <Grid size={{xs:12, sm:12, md:3, lg:3}}>
                    <Stack direction="row" spacing={1} sx={{mt:{xs:2, md:1}}}>
                        {socialItems.map((item, key)=>
                            <IconButton 
                                key={key} 
                                sx={{color:theme.palette.background.paper}}
                                component="a"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Link in New Tab"
                                >
                                {item.icon}
                            </IconButton>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        </Container>

        </Container>
    </ThemeProvider>
    
  )
}

export default Mainfooter