"use client"
import { Typography, Box, Container, Stack, Button, ThemeProvider, Grid2, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import ProductCard from './ProductCard.js'

// api
import { BASE_API } from '../api.js'
import theme from '@/app/Theme.js'

const PropertiesPage = () => {
  const [properties, setProperties] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const apiUrl = `${BASE_API}/api/all-properties`;  // Replace with your API endpoint
  
  const buttonFilter = [
    {
      id:1,
      text:"All"
    },
    {
      id:2,
      text:"New Launch"
    },
    {
      id:3,
      text:"Ready to Move"
    },
    {
      id:4,
      text:"Upcomming"
    }
  ]
    


    React.useEffect(() => {
      const fetchProperties = async () => {
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            const data = await response.json();
            setProperties(data);  // Update the state with API response
          } else {
            console.error('Failed to fetch properties');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchProperties();
    }, []); 

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg" sx={{mt:10, mb:10, alignItems:"center"}} >
        {/* <Typography variant='h3' component="h3" sx={{textAlign:"center", mb:3}}>Properties</Typography>
        <Typography variant='p' component="p" sx={{textAlign:"center", mb:10}}>Hover on Properties Card to see the available images</Typography>
         */}
         <Stack direction="row" spacing={1} sx={{mb:5}}>
          {buttonFilter.map((item, key)=>
            <Button
              key={key}
              variant={activeIndex == key?'contained':'outlined'}
              size='small' 
              sx={{textTransform:'none'}}
              onClick={() => setActiveIndex(key)}
              >{item.text}</Button>
          )}
         </Stack>
            <Grid container >
                {properties.map((item, key)=>
                    <Grid size={{xs:12, sm:12, md:8, lg:8}} sx={{mb:5}} key={item.id}>
                      <Box sx={{ maxHeight: "100vh", overflowY: "auto", pr: 2 }}>
                        <ProductCard item={item}/>
                      </Box>
                    </Grid>
                )}
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{backgroundColor:theme.palette.background.paper,p:3,border:2,boxShadow:8}}>
                  {/* <Box sx={{ position: "sticky", top: 0 }}> */}
                      {/* <Grid2 container> */}
                      <Grid2 size={{xs:12, sm:12, md:12, lg:12}} sx={{p:1}}>
                        <Typography variant="p" component="p" sx={{fontWeight:700}}>Need Help !</Typography>
                        <Typography variant="p" component="p" sx={{fontWeight:700}}>Contact Our Experts</Typography>
                      </Grid2>
                        <Grid2 size={{xs:12, sm:12, md:12, lg:12}} sx={{p:1}}>
                          <TextField 
                            size='small' 
                            variant='outlined' 
                            label="Name"
                            fullWidth
                            ></TextField>
                        </Grid2>
                        <Grid2 size={{xs:12, sm:12, md:12, lg:12}} sx={{p:1}}>
                          <TextField 
                            size='small' 
                            variant='outlined' 
                            label="Email"
                            fullWidth
                            inputMode='email'
                            ></TextField>
                        </Grid2>
                        <Grid2 size={{xs:12, sm:12, md:12, lg:12}} sx={{p:1}}>
                          <TextField 
                            size='small' 
                            variant='outlined' 
                            label="Mobile Number"
                            fullWidth
                            inputMode='number'
                            ></TextField>
                        </Grid2>
                        <Grid2 size={{xs:12, sm:12, md:12, lg:12}} sx={{p:1}}>
                          <Button variant="contained" sx={{textTransform:'none'}}>Contact Now</Button>
                        </Grid2>
                        
                        
                      {/* </Grid2> */}
                  {/* </Box> */}
              </Grid>
            </Grid>
    </Container>
    
    </ThemeProvider>
    
  )
}

export default PropertiesPage