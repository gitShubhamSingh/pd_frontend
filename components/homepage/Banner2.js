'use client'
import React from 'react'
import { ThemeProvider, Container, Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Grid2, TextField, InputLabel, Select,OutlinedInput,MenuItem, Chip, Button, ButtonGroup, Dialog, DialogTitle, DialogContent, DialogActions,useMediaQuery } from '@mui/material'
import theme from '@/app/Theme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Banner1 from '@/assets/banner/banner1.jpg'
import Banner2 from '@/assets/banner/banner2.jpg'
import Banner3 from '@/assets/banner/banner3.jpg'
import Banner4 from '@/assets/banner/banner4.jpg'
import Link from 'next/link';

const banners = [Banner1, Banner2, Banner3, Banner4]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const names = [
    'Apartments',
    'Villas',
    'Lands',
    'Commercial',
    'Studio'
  ];

function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }
  
const Banner = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // true for xs and sm, false for md and up

    const [personName, setPersonName] = React.useState([]);
    const [openLocation, setOpenLocation] = React.useState(false);
    const [openProperty, setOpenProperty] = React.useState(false);
    const [openBudget, setOpenBudget] = React.useState(false);
    
    // Location
    const [valueLocation, setValueLocation] = React.useState('Location')
    const [subValueLocation, setSubValueLocation] = React.useState('Select Location')

    // Property
    const [valuePropertyType, setValuePropertyType] = React.useState('Property');
    const [subValuePropertyType, setSubValuePropertytype] = React.useState('Select Type Of Property');

    // Budget
    const [valueBudget, setValueBudget] = React.useState('Budget');
    const [subValueBudget, setSubValueBudget] = React.useState('Select Your Budget');

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
      const buttons = [
        <Button key="two" sx={{pl:{xs:5,sm:4},pt:{xs:5, sm:5},pb:{xs:5},pl:{xs:10, sm:4},pr:{xs:10,sm:8, md:15}, display:"flex", flexDirection:"column",alignItems:'flex-start', textTransform:'none', borderRadius:10}} onClick={handleChangeLocation}>
            <Typography variant='h5' component="p" sx={{fontSize:{xs:15, sm:10,md:20},fontWeight:{sm:"bold"}}}>{valueLocation} <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
            <Typography variant='body2' component="p" sx={{fontSize:{xs:10,sm:10,md:15}, color:theme.palette.primary.light}}>{subValueLocation}</Typography>
        </Button>,
        <Button key="one" sx={{pl:{xs:5,sm:4},pt:5,pb:5,pr:{sm:8,md:15}, display:"flex", flexDirection:"column",alignItems:'flex-start', textTransform:'none'}} onClick={handleChangeProperty}>
            <Typography variant='h6' component="p" sx={{fontSize:{xs:15, sm:12,md:20},fontWeight:{sm:"bold"}}}>{valuePropertyType}  <ExpandMoreIcon sx={{fontSize:{sm:14,md:20}}}/></Typography>
            <Typography variant='body2' component="p" sx={{fontSize:{xs:10, sm:10,md:15}, color:theme.palette.primary.light}}>{subValuePropertyType} </Typography>  
        </Button>,
        <Button key="three" sx={{pl:{xs:5,sm:4},pt:5,pb:5,pr:{sm:8,md:15},display:'flex',flexDirection:'column',alignItems:'flex-start', textTransform:"none", borderRadius:10}} onClick={handleChangeBudget}>
            <Typography variant='h6' component="p" sx={{fontSize:{xs:15, sm:10,md:20}, fontWeight:{sm:"bold"}}}>{valueBudget} <ExpandMoreIcon sx={{fontSize:{sm:15,md:20}}}/></Typography>
            <Typography variant='body2' component="p" sx={{fontSize:{xs:10,sm:10,md:15}, color:theme.palette.primary.light}}>{subValueBudget}</Typography>
        </Button>
      ]
      const locations = [
        'Ujjain',
        'Panchmarhi',
        'Indore',
        'Gwalior',
        'Bhopal',
        'Sanchi'
      ]
      const property = [
        '1 Room Kitchen - 1RK',
        '1 Bedroom Kitchen - 1BHK',
        '2 Bedroom Kitchen - 2BHK',
        '3 Bedroom Kitchen - 3BHK',
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

  return (
    <ThemeProvider theme={theme}>
       
        <Container maxWidth="xlg" sx={{
            backgroundImage:`url(${banners[Math.floor(Math.random() * banners.length)].src})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundAttachment:'fixed',
            minHeight:'80vh',
    
        }}>
           <br/><br/><br/><br/>
            <Box textAlign="center" sx={{pt:7,pb:10,borderRadius:100,width:'90%',maxWidth:'1100px',margin:'0 auto', backgroundColor: 'rgba(255, 255, 255, 0.85)',}}>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="buy"
                    >
                        <FormControlLabel value="buy" control={<Radio/>} label="Buy" size="small"></FormControlLabel>
                        <FormControlLabel value="rent" control={<Radio/>} label="Rent" size="small"></FormControlLabel>
                    </RadioGroup>
                </FormControl>

                {/* <Grid2 container sx={{mt:5}}>
                    <Grid2 size={{xs:12, sm:5, md:3}}>
                        <TextField 
                            id="Location" 
                            label='Select Location' 
                            
                            fullWidth 
                            sx={{pt:1, width:{xs:"80%"}}}
                            ></TextField>
                    </Grid2>
                    <Grid2 size={{xs:12, sm:5, md:3}}>
                        <FormControl sx={{ m: 1, width:{xs:"80%"} }}>
                            <InputLabel id="demo-multiple-chip-label">Type</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{xs:12, sm:5, md:3}}>
                        <Typography variant='p' component="p">MyGrid</Typography>
                    </Grid2>
                    <Grid2 size={{xs:12, sm:5, md:3}}>
                        <Typography variant='p' component="p">MyGrid</Typography>
                    </Grid2>
                </Grid2> */}
                
                <Box sx={{mt:5}}>
                    <ButtonGroup size="large" aria-label="large button group" orientation={isSmallScreen ? 'vertical' : 'horizontal'}>
                        {buttons}
                    </ButtonGroup>
                </Box>

          
                <Link href="/properties">
                    <Button variant='contained' sx={{borderRadius:0, mt:5,pt:1,pb:1,pl:5,pr:5,fontSize:15, textTransform:"none"}}>Search</Button>
                </Link>
          
            </Box>

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
                    <RadioGroup
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
                        </RadioGroup>
                </DialogContent>
                <DialogActions>
                    {/* <Button>Ok</Button> */}
                    <Button onClick={handleCancel}>Cancel</Button>
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