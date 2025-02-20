import React from 'react'
import theme from '@/app/Theme'
import { Container, ThemeProvider, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'


const InquiryForm = () => {
    const [type, setType] = React.useState('');

    const item = [
        {
            id:1,
            title:'Why Paradise is the Perfect Choice ?',
            number:'',
            subtitle:'',
            about:'',
        },
        {
            id:2,
            title:'',
            number:'01.',
            subtitle:'Ideal for Real Estate Experts and Agencies',
            about:'At Paradise Consultancies, we ensure you never miss an opportunity. Our solutions make it effortless to transform inquiries into successful property transactions.',
        },
        {
            id:3,
            title:'',
            number:'02.',
            subtitle:'Create Custom Lead Capture Forms',
            about:'Stay on top of your leads with our built-in tools. Track and manage client inquiries seamlessly, without relying on costly external CRMs.',
        },
        {
            id:4,
            title:'',
            number:'03.',
            subtitle:'Tailored to Your Unique Needs',
            about:'Our highly customizable website design lets you reflect the essence of Paradise Consultancies. Showcase your properties and services in a way that meets your expectations and exceeds client demands.',
        },
        
    ]

    const handleChange = (event) => {
        setType(event.target.value);
      };

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="xlg" sx={{mt:10,backgroundColor:theme.palette.primary.main, color:theme.palette.background.paper}}>
            <Container maxWidth="lg">
                <Grid container sx={{pt:15, pb:15}}>
                        <Grid size={{xs:12, sm:12, md:8, lg:8}}>
                            <Grid container>
                                {item.map((item, key)=>
                                    <Grid size={{xs:12, sm:12, md:6, lg:6}} sx={{p:5}} key={key}>
                                        <Typography variant='h4'>{item.title}</Typography>
                                        <Typography variant='h4' sx={{mb:1}}>{item.number}</Typography>
                                        <Typography variant='h5' sx={{mb:1}}>{item.subtitle}</Typography>
                                        <Typography variant='p' component="p" sx={{color:theme.palette.background.paper, letterSpacing:1, fontSize:13}}>{item.about}</Typography>
                                    </Grid>
                                )}
                                
                            </Grid>
                        </Grid>
                        <Grid size={{xs:12, sm:12, md:4, lg:4}} >
                            <Typography variant='h4' component="p" sx={{mt:{xs:10, md:2}}}>Real Estate Inquiry Form</Typography>
                            <Typography variant='p' component="p" sx={{mt:2, fontSize:14}}>Select Your Inquiry and our Agent Will Help You on Priority Basis.</Typography>
                            <Grid container sx={{p:2}}>
                                <Grid size={{xs:12, sm:12, md:12, lg:12}} sx={{pt:2}}>
                                    <Typography variant='h6' sx={{color:theme.palette.background.paper,mb:1}}>Inquiry Type</Typography>
                                    <FormControl sx={{ mt: 1}} size="small" fullWidth>

                                        <InputLabel id="demo-select-small-label" sx={{
                                            color:theme.palette.background.paper,
                                            '&.Mui-focused': {
                                                color: theme.palette.background.paper, 
                                            },
                                            }}>Select</InputLabel>
                                        <Select
                                            labelid="demo-select-small-label"
                                            id="demo-select-small"
                                            value={type}
                                            label="Select"
                                            onChange={handleChange}
                                            sx={{
                                                borderColor:theme.palette.background.paper,
                                                color: theme.palette.background.paper,           // Set font color to black
                                                borderColor: theme.palette.background.paper,     // Optional border styling
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: theme.palette.background.paper, // Set border color
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: theme.palette.background.paper, // Border color on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: theme.palette.background.paper, // Border color when focused
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    color: theme.palette.background.paper, // Change pivot (dropdown arrow) icon color
                                                },
                                            }}
                                            MenuProps={{
                                                PaperProps: {
                                                    sx: {
                                                        backgroundColor: theme.palette.primary.light,
                                                        color: 'black'           // Dropdown menu text color
                                                    },
                                                },
                                            }}
                                            fullWidth
                                        >
                                            <MenuItem value={10}>Purchase</MenuItem>
                                            <MenuItem value={20}>Rent</MenuItem>
                                            <MenuItem value={30}>Sell</MenuItem>
                                            <MenuItem value={40}>Evaluation</MenuItem>
                                            <MenuItem value={50}>Other</MenuItem>
                                            
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={{xs:6, sm:6, md:6, lg:6}} sx={{p:2}}>
                                    <Typography variant='h6' sx={{color:theme.palette.background.paper,mb:1}}>First Name</Typography>
                                    <FormControl sx={{ mt: 1}} size="small" fullWidth >
                                          <TextField
                                            labelid="first-name-label"
                                            // label="Enter"
                                            id="outlined-size-small"
                                            size="small"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: theme.palette.background.paper, // Set initial border color to white
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: theme.palette.background.paper, // Ensure border color stays white on hover
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: theme.palette.background.paper, // Border color stays white when focused
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: theme.palette.background.paper, // Set text color to white
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: theme.palette.background.paper, // Set placeholder color to white
                                                    opacity: 1, // Ensure full opacity for better visibility
                                                },
                                            }}
                                            />
                                    </FormControl>
                                </Grid>
                                <Grid size={{xs:6, sm:6, md:6, lg:6}} sx={{p:2}}>
                                <Typography variant='h6' sx={{color:theme.palette.background.paper,mb:1}}>Last Name</Typography>
                                    <FormControl sx={{ mt: 1}} size="small" fullWidth >
                                          <TextField
                                            labelid="first-name-label"
                                            // label="Enter"
                                            id="outlined-size-small"
                                            size="small"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: theme.palette.background.paper, // Set initial border color to white
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: theme.palette.background.paper, // Ensure border color stays white on hover
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: theme.palette.background.paper, // Border color stays white when focused
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: theme.palette.background.paper, // Set text color to white
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: theme.palette.background.paper, // Set placeholder color to white
                                                    opacity: 1, // Ensure full opacity for better visibility
                                                },
                                            }}
                                            />
                                    </FormControl> 
                                </Grid>
                                <Grid size={{xs:12, sm:12, md:12, lg:12}} sx={{p:2}}>
                                    <Typography variant='h6' sx={{color:theme.palette.background.paper,mb:1}}>Contact Number</Typography>
                                    <FormControl sx={{ m: 1}} size="small" fullWidth >
                                          <TextField
                                            labelid="first-name-label"
                                            // label="Enter"
                                            id="outlined-size-small"
                                            size="small"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: theme.palette.background.paper, // Set initial border color to white
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: theme.palette.background.paper, // Ensure border color stays white on hover
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: theme.palette.background.paper, // Border color stays white when focused
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: theme.palette.background.paper, // Set text color to white
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: theme.palette.background.paper, // Set placeholder color to white
                                                    opacity: 1, // Ensure full opacity for better visibility
                                                },
                                            }}
                                            />
                                    </FormControl>
                                </Grid>

                                <Grid size={{xs:12, sm:12, md:12, lg:12}} sx={{p:2}}>
                                    <Button variant='contaied' sx={{borderColor:theme.palette.background.paper, boxShadow:10}} fullWidth>Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Container>
          
        </Container>
    </ThemeProvider>
  )
}

export default InquiryForm