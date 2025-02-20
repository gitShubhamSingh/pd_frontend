"use client"
import React from 'react'
import theme from '@/app/Theme'
import { 
  ThemeProvider, Container, Grid2, Typography, Button, Box, Avatar, Chip, IconButton, ButtonGroup, 
  Dialog, DialogTitle, DialogContent, DialogActions, RadioGroup, FormControlLabel, Radio, useMediaQuery, Tab, Tabs, Checkbox, 
  FormGroup, TextField, Autocomplete
  } from '@mui/material'
import Link from 'next/link'

// icons
import StarIcon from '@mui/icons-material/Star';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ForestIcon from '@mui/icons-material/Forest';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Logo from '@/assets/logo.png'

import ChaletIcon from '@mui/icons-material/Chalet';
import ApartmentIcon from '@mui/icons-material/Apartment';


const Banner = () => {

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // true for xs and sm, false for md and up
  const [tabValue, setTabValue] = React.useState(0);
  const [valueSearchType, setValueSearchType] = React.useState(0);

  const [openLocation, setOpenLocation] = React.useState(false);
  const [openProperty, setOpenProperty] = React.useState(false);
  const [openBudget, setOpenBudget] = React.useState(false);

  const [valueLocation, setValueLocation] = React.useState('Location')
  const [subValueLocation, setSubValueLocation] = React.useState('Select Location')
  
  const [valuePropertyType, setValuePropertyType] = React.useState('Property');
  const [subValuePropertyType, setSubValuePropertytype] = React.useState('Select Type Of Property');

  const [valueBudget, setValueBudget] = React.useState('Budget');
  const [subValueBudget, setSubValueBudget] = React.useState('Select Your Budget');
  const locations = [
    'Ujjain',
    'Panchmarhi',
    'Indore',
    'Gwalior',
    'Bhopal',
    'Sanchi'
  ]
  const property = [
    'Residential',
    'Commercial',
    'Farmhouse',
    'Land'
  ]
  const budget = [
    '20L - 30L',
    '30L - 50L',
    '50L - 70L',
    '70L - 1CR',
    'Above 1CR'
  ]

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
  ]

  const searchType = [
    {
      label:"Buy Properties",
      icon:<DomainAddIcon/>,
    },
    {
      label:"Rent Properties",
      icon:<HomeWorkIcon/>,
    },
    {
      label:"Plot & Land",
      icon:<ForestIcon/>,
    },
    {
      label:"Commercials",
      icon:<AddBusinessIcon/>,
    }
  ]

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeLocation = (event) => {
    setOpenLocation(true)
    };

  const handleChangeProperty = (event) => {
    setOpenProperty(true)
    };
  const handleChangeBudget = (event) => {
    setOpenBudget(true)
    };
  const handleCancel = (event)=>{
    setOpenLocation(false);
    setOpenProperty(false);
    setOpenBudget(false);
};

const handleChangeSearchType = (event, newValue) => {
  setValueSearchType(newValue);
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


  return (
   <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{mt:10,mb:10, }}>
            <Grid2 container>
              <Grid2 size={{xs:12, sm:12, md:8, lg:8}} sx={{p:{xs:3}}}>
                 <Typography variant='h2' component="p" sx={{mb:1, color:theme.palette.primary.main}} >
                    <Box component="span" sx={{ color: 'grey' }}>Find The</Box> Most 
                 </Typography>
                 <Typography variant='h2' component="p" sx={{mb:1, color:theme.palette.primary.dark}}>
                  Appropriate Residence 
                 </Typography>
                 <Typography variant='h2' component="p" sx={{mb:1, color:theme.palette.primary.main}}>
                 For You <Box component="span" sx={{ color: 'grey'}}>To Live In.</Box>
                 <IconButton variant="contained" size="large" sx={{backgroundColor:"#000", ml:3}}>
                  <ArrowDownwardIcon sx={{fontSize:40, color:"#fff"}}/>
                </IconButton>
                 </Typography>
                 <Link href="/properties">
                    <Button variant='outlined' size="large" sx={{mt:3, pt:2, pb:2, borderRadius:50,  textTransform:"none",}}>
                      See Property
                    </Button>
                 </Link>
              </Grid2>

              <Grid2 size={{xs:12, sm:12, md:4, lg:4}} sx={{p:{xs:3}}}>
              <Chip
                  avatar={<Avatar alt="Natacha" src={Logo.src} />}
                  label="TOP TESTIMONIAL"
                  variant="outlined"
                />
                <Typography variant='p' component="p" sx={{mt:3, color:"grey", fontSize:13}}>
                    Paradise made finding my dream property effortless! Their vast listings, clear details, and excellent support helped me secure the perfect home in no time. Highly recommend Paradise for all your property needs!
                </Typography>
                <Typography variant='p' component="p" sx={{mt:3, display: 'flex', alignItems: 'center' }}>
                  <StarIcon sx={{ verticalAlign: 'middle', mr: 0.5 }}/> 4.8
                  </Typography>
              </Grid2>
            </Grid2>
            <Typography variant='h5' component="p" sx={{mb:4, textAlign:"center", mt:2, mb:10}}>Let&#39s find your dream Home.</Typography>
                 
            {/* Search Bar */}
            <center>
              <Box sx={{p:10, backgroundColor:theme.palette.primary.light, borderRadius:5}}>
               <center>
                  <Tabs value={valueSearchType} onChange={handleChangeSearchType} aria-label="icon label tabs example" >
                      {searchType.map((item, key)=>
                        <Tab icon={item.icon} label={item.label} key={key} sx={{textTransform:'none'}}/>
                      )}
                      {/* <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                      <Tab icon={<PersonPinIcon />} label="NEARBY" /> */}
                  </Tabs>
                </center>
                
               
              <Grid2 container sx={{pt:2, pb:2}} maxWidth="md">
                <Grid2 size={{xs:12, sm:4, md:4}} sx={{pt:3,pl:3,pr:3, border:1, borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                  <center>
                      <Autocomplete
                          multiple
                          id="tags-outlined"
                          options={top100Films}
                          getOptionLabel={(option) => option.title}
                          defaultValue={[top100Films[10]]}
                          filterSelectedOptions
                          renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Enter Location"
                            placeholder="Add Location"
                            variant="standard" // Use standard to avoid default outline
                            sx={{
                              "& .MuiInputBase-root": {
                                border: "none !important", // Ensures no border
                                boxShadow: "none", // Removes any shadow
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: "none !important", // Removes border for outlined variant
                              },
                              "& .MuiInput-underline:before": {
                                borderBottom: "none !important", // Removes underline
                              },
                              "& .MuiInput-underline:after": {
                                borderBottom: "none !important", // Removes active underline
                              },
                              "& .Mui-focused": {
                                outline: "none !important", // Prevents focus border
                              },
                            }}
                            />
                          )}
                          sx={{
                            mb:5,
                            "& .MuiOutlinedInput-root": {
                              border: "none !important", // Removes border from Autocomplete itself
                              boxShadow: "none",
                            },
                          }}
                        />
                    </center>
                </Grid2>

                <Grid2 size={{xs:12, sm:4, md:4}} sx={{p:2, borderRight:1, borderTop:1, borderBottom:1}}>
                    <center>

                      <Button onClick={handleChangeProperty} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start', textTransform:"none",}}>
                        <Typography variant='p' component="p" sx={{fontSize:15,fontWeight:"bold"}}>{valuePropertyType} <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
                        <Typography variant='body' component="p">{subValuePropertyType}</Typography>
                      </Button>
                      
                    {/* Button Group */}
                    {/* <ButtonGroup size="small" aria-label="large button group" orientation={isSmallScreen ? 'vertical' : 'horizontal'}> */}
                      
                      
                      {/* <Button key="one" onClick={handleChangeLocation} sx={{pt:3,pb:3,pl:5,pr:5, display:"flex", flexDirection:"column",alignItems:'flex-start', textTransform:'none', borderRadius:10}}>
                          <Typography variant='p' component="p" sx={{fontSize:20}}>{valueLocation} <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
                          <Typography variant='body2' component="p">{subValueLocation}</Typography>
                      </Button> */}
                      {/* <Button key="two" onClick={handleChangeProperty} sx={{display:"flex", flexDirection:"column",alignItems:'flex-start', textTransform:'none', border:0}}>
                          <Typography variant='p' component="p" sx={{fontSize:20}}>{valuePropertyType} <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
                          <Typography variant='body' component="p">{subValuePropertyType}</Typography>
                      </Button> */}
                      {/* <Button key="three" onClick={handleChangeBudget} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start', textTransform:"none",border:0}}>
                          <Typography variant='p' component="p" sx={{fontSize:20}}>{valueBudget} <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
                          <Typography variant='body' component="p">{subValueBudget}</Typography>
                      </Button>   */}
                  {/* </ButtonGroup> */}
                  
                  </center>
                </Grid2>
                
                <Grid2 size={{xs:12, sm:4, md:4, lg:4}} sx={{p:2, borderRight:1, borderTop:1, borderBottom:1, borderTopRightRadius:10, borderBottomRightRadius:10}}>
                    <center>
                      <Button key="three" onClick={handleChangeBudget} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start', textTransform:"none",border:0}}>
                        <Typography variant='p' component="p" sx={{fontSize:15, fontWeight:"bold"}}>{valueBudget} <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
                        <Typography variant='body' component="p">{subValueBudget}</Typography>
                      </Button>  
                    </center>
                </Grid2>
              </Grid2>
            </Box>
            </center>

            <center>
              <Button variant='contained' sx={{mt:3, textTransform:"none"}} component={Link} href="/properties" size="large">Search</Button>
            </center>

             {/* Location Dialog */}
             <Dialog open={openLocation} sx={{'& .MuiDialog-paper':{width:'80%', maxWidth:435}}}>
                <DialogTitle>Choose Location</DialogTitle>
                <DialogContent dividers>
                    <RadioGroup
                        onChange={(e)=>{setValueLocation(e.target.value),handleCancel(),setSubValueLocation('Change Location')}}
                    >
                        {locations.map((option)=>(
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio/>}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleOk}>Ok</Button> */}
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
            
            {/* Property Dialog */}
            <Dialog open={openProperty} sx={{'& .MuiDialog-paper':{width:'80%', maxWidth:435}}}>
                <DialogTitle>Choose Property</DialogTitle>
                <DialogContent>


                    {/* <RadioGroup
                        onChange={(e)=>{setValuePropertyType(e.target.value),handleCancel(),setSubValuePropertytype('Change Property')}}
                    >
                        {property.map((option)=>(
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio/>}
                                label={option}
                            />
                        ))}
                        </RadioGroup> */}

                      <Tabs
                        value={tabValue}
                        onChange={handleChangeTab}
                        aria-label="icon position tabs example"
                      >
                        <Tab icon={<ChaletIcon />} label="Residential" sx={{textTransform:"none"}} />
                        <Tab icon={<ApartmentIcon />} label="Commercial" sx={{textTransform:"none"}}/>
                      </Tabs>
                      <TabPanel value={tabValue} index={0}>   
                        {/* Residential     */}
                        <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="Appartment" />
                          <FormControlLabel control={<Checkbox />} label="Plot" />
                          <FormControlLabel control={<Checkbox />} label="Builder Floor" />
                          <FormControlLabel control={<Checkbox />} label="Independent House" />
                          <FormControlLabel control={<Checkbox />} label="Villa" />
                          <FormControlLabel control={<Checkbox />} label="Penthouse" />
                        </FormGroup>
                      </TabPanel>
                      <TabPanel value={tabValue} index={1}>  
                        {/* Commercial  */}
                        <FormGroup>
                          <FormControlLabel control={<Checkbox />} label="Office Space" />
                          <FormControlLabel control={<Checkbox />} label="Shop" />
                          <FormControlLabel control={<Checkbox />} label=" Land" />
                          <FormControlLabel control={<Checkbox />} label="Industrial Plot" />
                          <FormControlLabel control={<Checkbox />} label="Showroom" />
                          <FormControlLabel control={<Checkbox />} label="Warehouse" />
                        </FormGroup>
                      </TabPanel>
                </DialogContent>
                <DialogActions>
                    {/* <Button>Ok</Button> */}
                    <Button onClick={handleCancel} variant='outlined' sx={{textTransform:"none"}}>Cancel</Button>
                    <Button onClick={handleCancel} variant='contained' sx={{textTransform:"none"}}>Select</Button>
                </DialogActions>
            </Dialog>
            
            {/* Budget Dialog */}
            <Dialog open={openBudget} sx={{'& .MuiDialog-paper':{width:'80%', maxWidth:435}}}>
                <DialogTitle>Select Budget</DialogTitle>
                <DialogContent>
                    <RadioGroup
                        onChange={(e)=>{setValueBudget(e.target.value), handleCancel(), setSubValueBudget('Change Budget')}}
                    >
                        {budget.map((option)=>(
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio/>}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    {/* <Button>Ok</Button> */}
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Container>
   </ThemeProvider>
  )
}

export default Banner