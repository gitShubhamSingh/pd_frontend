'use client'
import { Container, Grid2, Typography, Button, Box, Stack, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { useParams } from 'next/navigation';
import React from 'react'
import Grid from '@mui/material/Grid2'
import Image from 'next/image';
import { ThemeProvider } from '@emotion/react';
import theme from '@/app/Theme'

// import api
import { BASE_API } from '../api';

//icons
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KingBedIcon from '@mui/icons-material/KingBed';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import Banner1 from '@/assets/banner/banner1.jpg'
import Link from 'next/link';



const PropertiesDetailsPage = () => {
    
    const params = useParams(); 
    const slug = params?.propertiesSlug; // Extract the slug from `params`
    
    
    const [property, setProperty] = React.useState(null);
    const [bigImage, setBigImage] = React.useState('')

    // for all data
    React.useEffect(() => {
        
        // for property details
        const fetchProperty = async () => {
        try {
            const response = await fetch(`${BASE_API}/api/property/${slug}`,{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProperty(data);
             
            } else {
            console.error('Property not found');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        };

        if (slug) {
            fetchProperty();
        }

    }, [slug]);

    // for big Image only
    React.useEffect(() => {
        if (property && property.image_urls && property.image_urls.length > 0) {
            setBigImage(property.image_urls[0]);
        }
    }, [property]);

    if (!property) {
        return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" sx={{ p: 2, mb: 20 }}>
                    <Typography variant="h4" sx={{ mt: 10 }}>
                        Loading property details...
                    </Typography>
                </Container>
            </ThemeProvider>
        );
    }

    
    // send query on whatsapp
    const sendMessage = () => {
        const phoneNumber = '+916232598017'; // Replace with the desired phone number
        const message =`Hello, I am interested in your property! \n\n ${BASE_API}/properties/${slug}`; // Replace with your message
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open the WhatsApp link in a new tab
        window.open(whatsappUrl, '_blank');
    };

    // const sendContact = ()=> {
    //     window.open(`${BASE_API}/contact`)
    // }

   
  return (
    <ThemeProvider theme={theme}>
            
        <Container maxWidth="lg" sx={{p:2, mb:20}}>

            {/* Header and property details */}
            <Box sx={{display:{xs:'block',sm:'block'}}}>
                <Grid2 container sx={{mt:10}}>
                    <Grid2 size={{xs:6, sm:6, md:8, lg:8}}>
                        <Typography variant='h4'>{property.propertyName}</Typography>
                        <Typography variant='p' component="p" sx={{verticalAlign:"middle", mt:1}}>
                            Available for <Button variant='contained' size='small'>{property.availableFor}</Button>
                        </Typography>
                        <Typography variant='p' component="p" sx={{mt:1.5, fontSize:13}}>
                            <AddLocationAltIcon sx={{verticalAlign:"middle"}}/> {property.address}
                        </Typography>
                        
                    </Grid2>
                    <Grid2 size={{xs:6, sm:6, md:4, lg:4}} sx={{textAlign:'right'}}>
                        <Typography variant="h5" sx={{ color: 'text.secondary', mt:1,fontWeight:'bold' }}>
                            <CurrencyRupeeIcon sx={{verticalAlign:'middle'}}/> {property.totalPrice} 
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', mt:1, }}>
                            <CurrencyRupeeIcon sx={{verticalAlign:'middle'}}/> {property.perSqFeetPrice} / sqft
                        </Typography>
                    </Grid2>
                    
                </Grid2>
            </Box>

            {/* Imge and details */}
            <Grid container sx={{mt:5}}>
                <Grid size={{xs:12, sm:12, md:8, lg:8}}>
                    <Box sx={{p:1,boxShadow:12}}>
                        {console.log('bigImage:-',bigImage)}
                        <Image
                            src={bigImage}
                            width={700}
                            height={500}
                            layout="responsive"
                            alt="Property Image"
                
                    />
                </Box>
                {/* <Stack spacing={2} direction="row"> */}
                    
                    <Grid container sx={{mt:5}}>
                        {property.image_urls.map((item, key)=>
                        
                            <Grid size={{xs:4, sm:2, md:2, lg:2}} key={key}>
                                <Button sx={{border:4,p:0,m:1}} onClick={()=>setBigImage(item)}>
                                    {console.log('buttonImage:-',item)}
                                    <Image
                                        src={item}
                                        width={90}
                                        height={70}
                                        alt="Property Image"
                                    />
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                {/* </Stack> */}
                </Grid>

                <Grid size={{xs:12, sm:12, md:4, lg:4}}> 
                    <TableContainer sx={{pl:{md:4}}}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{border:'none'}}>
                                        <Typography variant='h6'>Property Details</Typography>
                                        <Typography variant='p' component="p" sx={{mt:2}}>{property.details}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{border:'none'}}>
                                        <Typography variant='h6'>Contact for this Property</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{border:'none'}}>
                                       
                                        <Button variant='contained' sx={{border:1}} onClick={sendMessage}>
                                            <WhatsAppIcon/>&nbsp; WhatsApp
                                        </Button>&nbsp;&nbsp;
                                     
                                        <Link href="/contact">
                                            <Button variant='outlined' sx={{border:1}}>
                                                Contact
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>


            {/* Overview Section of the properties */}
            <Box sx={{mt:10, border:"1px solid", borderColor:theme.palette.primary.light, p:2, borderRadius:2, boxShadow:4}}>
                <Typography variant='h6' component="p" >Overview</Typography>
                <Grid container sx={{mt:5,mb:5}}>
                    <Grid size={{xs:6, sm:4, md:4, lg:2}} sx={{mb:5}}>
                        <Typography variant='p' component="p" sx={{color:theme.palette.primary.dark,mb:0.5}}>Property Type</Typography>
                        <Typography variant='h5' component="h5">{property.propertyType}</Typography>
                    </Grid>
                    <Grid size={{xs:6, sm:4, md:4, lg:2}}>
                        <Typography variant='p' component="p" sx={{color:theme.palette.primary.dark,mb:0.5}}><KingBedIcon sx={{verticalAlign:"middle",mr:0.5}}/> &nbsp;Bedroom</Typography>
                        <Typography variant='h5' component="h5">{property.bedroom}</Typography>
                    </Grid>
                    <Grid size={{xs:6, sm:4, md:4, lg:2}} sx={{mb:5}}>
                        <Typography variant='p' component="p" sx={{color:theme.palette.primary.dark,mb:0.5}}><ShowerIcon sx={{verticalAlign:"middle"}}/> &nbsp;Bathroom</Typography>
                        <Typography variant='h5' component="h5">{property.bathroom}</Typography>
                    </Grid>
                    <Grid size={{xs:6, sm:4, md:4, lg:2}}>
                        <Typography variant='p' component="p" sx={{color:theme.palette.primary.dark,mb:0.5}}><LocalParkingIcon sx={{verticalAlign:"middle"}}/> &nbsp;Parking</Typography>
                        <Typography variant='h5' component="h5">{property.parking}</Typography>
                    </Grid>
                    <Grid size={{xs:6, sm:4, md:4, lg:2}}>
                        <Typography variant='p' component="p" sx={{color:theme.palette.primary.dark,mb:0.5}}><SquareFootIcon sx={{verticalAlign:"middle"}}/> &nbsp;Area</Typography>
                        <Typography variant='h5' component="h5">{property.area} sqft</Typography>
                    </Grid>
                    <Grid size={{xs:6, sm:4, md:4, lg:2}}>
                        <Typography variant='p' component="p" sx={{color:theme.palette.primary.dark,mb:0.5}}><CalendarMonthIcon sx={{verticalAlign:"middle"}}/> &nbsp;Year</Typography>
                        <Typography variant='h5' component="h5">{property.year}</Typography>
                    </Grid>
                </Grid>
            </Box>


        </Container>

    </ThemeProvider>

    
  )
}

export default PropertiesDetailsPage