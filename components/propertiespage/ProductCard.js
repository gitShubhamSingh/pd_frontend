'use client'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Box, IconButton, Grid2, CardActions, Button } from '@mui/material';
import Link from 'next/link'
import {ThemeProvider} from '@mui/material';



// icons
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import theme from '@/app/Theme'

const MAX_LENGTH = 150; // Adjust based on your UI preference

const ProductCard = ({item}) => {

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [showFullText, setShowFullText] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);

    React.useEffect(() => {
        if (hovered) {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.image_urls.length);
        }, 1000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }
    }, [hovered, item.image_urls]);

  

  return (
    <ThemeProvider theme={theme}>
    
            <Card sx={{ boxShadow:5,p:2,border:2, display:'flex', position:"relative"}}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
            >
                <Grid2 container>
                    <Grid2 size={{xs:12, sm:6, md:6, lg:6}} sx={{p:1}}>
                    <Link href={`/properties/${item.id}`}> 
                        <CardMedia
                            component="img"
                            height="320"
                            image={item.image_urls[currentImageIndex]}
                            alt="green iguana"
                            sx={{borderRadius:2,
                                boxShadow:3,
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    transition:"0.5s all"
                                },
                                transition:"0.5s all"
                            }}
                            />
                        </Link>
                    </Grid2>
                    <Grid2 size={{xs:12, sm:6, md:6, lg:6}} sx={{p:1}}>
                        <CardContent >
                            <Box sx={{ position: "absolute", top: 20, right: 20,  gap: 5 }}>
                                <IconButton sx={{  boxShadow: 2, backgroundColor:theme.palette.background.paper, mr:1, }}>
                                    <FavoriteBorderIcon sx={{color:theme.palette.primary.main}} />
                                </IconButton>
                                <IconButton sx={{ boxShadow: 2, backgroundColor:theme.palette.background.paper }}>
                                    <ShareIcon sx={{color:theme.palette.primary.main}}/>
                                </IconButton>
                            </Box>

                            <Link href={`/properties/${item.id}`}> 
                                <Typography component="p" variant="subtitle1" sx={{fontWeight:700}}>{item.propertyName}</Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                    sx={{ color: 'text.secondary' }}
                                >
                                <AddLocationAltIcon sx={{verticalAlign:"middle",mr:0.5}}/>{item.address}
                                </Typography>
                                <Typography variant='h6' component="div"><CurrencyRupeeIcon sx={{verticalAlign:"middle",mr:0.5}}/>{item.totalPrice}</Typography>
                                <Typography variant='p' component="div" sx={{mb:1, fontSize:11}}>2, 3, 4 BHK</Typography>
                                <Typography 
                                    variant='p' 
                                    component="p" 
                                    fontSize={11}
                                    sx={{
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: showFullText ? "unset" : 6, // Limit to 3 lines
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxHeight: showFullText ? "none" : "100px", // Adjust based on font size
                                    }}
                                    >{item.details}</Typography>
                            </Link>
                            {item.details.length > MAX_LENGTH && (
                                <Button
                                    size="small"
                                    sx={{ textTransform: "none", fontSize: 13, fontWeight:'bolder' }}
                                    onClick={() => setShowFullText(!showFullText)}
                                >
                                    {showFullText ? "Show Less" : "Show More..."}
                                </Button>
                            )}
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' sx={{textTransform:'none',p:1, bgcolor:theme.palette.success.main}} size='small'><WhatsAppIcon sx={{mr:1}}/>WhatsApp</Button>
                            <Button variant='contained' sx={{textTransform:'none',p:1}} size='small'><CallIcon sx={{mr:1}}/>Get Call Back</Button>
                        </CardActions>
                    </Grid2>
                </Grid2>
                
                
        

                  
            </Card>
        
    </ThemeProvider>
  )
}

export default ProductCard