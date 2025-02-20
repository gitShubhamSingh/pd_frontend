"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography, useTheme, Button, ThemeProvider, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Logo from '@/assets/logo.png'


const drawerWidth = 400
const navItems = [
    {
        key:1,
        text:"Home",
        link:"/"
    },
    {
        key:2,
        text:'Properties',
        link:'/properties'
    },
    {
        key:3,
        text:"About",
        link:"/about"
    },
    {
        key:4,
        text:"Contact",
        link:"/contact"
    },    
    // {
    //     key:5,
    //     text:"Testimonials",
    //     link:"/testimonials"
    // },   
]

const Mainheader = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    
    const theme=useTheme();


    const handleDrawerToggle = ()=>{
        setMobileOpen((prevState)=> !prevState)
    }

      // Defining Drawer
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center', display:"block", mt:5}}>

            <Typography
                 variant='h5'
                 noWrap
                 component="a"
                 href="/"
                 sx={{
                     // mt:1,
                     flexGrow:1,
                     transition:"0.5s all",
                     display:"flex",
                     alignItems:"center",
                     color:theme.palette.primary.main,
                     fontSize: 25
                 }}
            >

                <Image 
                    src={Logo} 
                    alt="logo" 
                    style={{marginRight:"10px",marginLeft:"50px"}} 
                    priority
                    width={50}
                    height={50}
                    /> &nbsp;Paradise Consultant
            </Typography>
            
            <List>
                {navItems.map((item)=>(
                    <ListItem key={item.key}>
                        <ListItemButton sx={{textAlign:"center"}} to={item.link} component={Link}>
                            <ListItemText primary={item.text}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )


  return (
    <ThemeProvider theme={theme}>
        <Box sx={{mt:5,mb:3}}>
            <CssBaseline/>
            <AppBar position="fixed" elevation={0} sx={{backgroundColor:theme.palette.background.paper, pt:3,pb:3}}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                             size="large"
                             color="#000" 
                             aria-label='open drawer' 
                             aria-controls="menu-appbar"
                             aria-haspopup="true"
                             edge="start"
                             sx={{display:{sm:"none"}}}
                             onClick={handleDrawerToggle} 
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant='h5'
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                // mt:1,
                                flexGrow:1,
                                transition:"0.5s all",
                                display:"flex",
                                alignItems:"center",
                                color:theme.palette.primary.main
                            }}
                        >
                            <Image 
                                src={Logo} 
                                alt="logo" 
                                style={{marginRight:"10px",marginLeft:"10px"}} 
                                priority
                                width={50}
                                height={50}
                                /> Paradise Consultant
                        </Typography>
                        <Box sx={{display:{xs:"none",sm:"block"}}}>
                            {navItems.map((item)=>(
                                <Link href={item.link} key={item.key}>
                                    <Button 
                                        key={item.key} 
                                        sx={{
                                            textTransform:"none",
                                            fontWeight:"bold",
                                            color:theme.palette.common.black
                                        }}>
                                        {item.text}
                                    </Button>
                                </Link>
                                ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer 
                    variant='temporary' 
                    open={mobileOpen} 
                    onClose={handleDrawerToggle} 
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs:'block', sm:'none'},
                        '& .MuiDrawer-paper': {boxSizing:'border-box', width:drawerWidth}
                    }}>
                        {drawer}
                </Drawer>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default Mainheader