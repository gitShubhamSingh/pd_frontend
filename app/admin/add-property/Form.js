"use client"
import React, {useState} from 'react'
import theme from '@/app/Theme'
import { Box,TextField,ThemeProvider, Select, MenuItem,InputLabel, FormControl,OutlinedInput, InputAdornment, Typography, Button, Input,List, ListItem, Snackbar, Alert } from '@mui/material'
import Grid from '@mui/material/Grid2'



// api
import { BASE_API } from '@/components/api'
//icons
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const Form = () => {

  const [formData, setFormData] = useState({
    propertyName: '',
    availableFor: '',
    totalPrice: '',
    perSqFeetPrice: '',
    propertyType: '',
    bedroom: '',
    bathroom: '',
    parking: '',
    area: '',
    year: '',
    address:'',
    details:'',
    state:'',
    city:'',
  });

  const [images, setImages] = useState(['', '', '', '','','']);
  const [openSnackBarSuccess, setOpenSnackBarSuccess] = React.useState(false);
  const [openSnackBarError, setOpenSnackBarError] = React.useState(false);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleFileChange = (index, e) => {

    const file = e.target.files[0];
    if (file) {
      // Remove spaces from the file name
      const fileName = file.name.replace(/\s+/g, '');
  
      // Create a new File object with the modified name
      const newFile = new File([file], fileName, { type: file.type });
  
      const newImages = [...images];
      newImages[index] = newFile;
      setImages(newImages);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Function to handle logic on button click
 

    // You can process this data here or send it to an API
    const data = new FormData();

    // Append each image file individually
    images.forEach((image, index) => {
      data.append('images', image);  // Append each image as a separate key-value pair
    });

    // Append normal form data (non-file fields)
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
   
    });
    
    console.log("data:-",formData)
    
    try {
      const response = await fetch(`${BASE_API}/api/create-property/`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        resetFormData()
        setOpenSnackBarSuccess(true)
        // popup success
      } else {
        setOpenSnackBarError(true)
        //popup 

      }
    } catch (error) {
      console.error('Error:-', error.response.data);
    }

  };


  const resetFormData = () => {
    setFormData({
      propertyName: '',
      availableFor: '',
      totalPrice: '',
      perSqFeetPrice: '',
      propertyType: '',
      bedroom: '',
      bathroom: '',
      parking: '',
      area: '',
      year: '',
      address: '',
      details: '',
      state:'',
      city:''
    });
    setImages(['', '', '', '']);
  };

  const handleCloseSnackBarSucccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBarSuccess(false);
  };
  const handleCloseSnackBarError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBarError(false);
  };
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{flexGrow:1}}>
          <Grid container spacing={{xs:2, md:5}}>
              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <TextField 
                  name="propertyName"
                  variant='outlined' 
                  label="Property Name" 
                  fullWidth
                  value={formData.propertyName}
                  onChange={handleChange}
                  ></TextField>
              </Grid>
             
              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Available For</InputLabel>
                  <Select
                    name="availableFor"
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.availableFor}
                    label="Available For"
                    onChange={handleChange}
                  >
                    <MenuItem value="rent">Rent</MenuItem>
                    <MenuItem value="purchase">Purchase</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}> 
                <FormControl fullWidth sx={{ m: 0 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Total Price</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><CurrencyRupeeIcon/></InputAdornment>}
                    label="Total Price"
                    name="totalPrice"
                    value={formData.totalPrice}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}> 
                <FormControl fullWidth sx={{ m: 0 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Per Sq. Feet Price</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start"><CurrencyRupeeIcon/></InputAdornment>}
                    label="Per Sq. Feet Price"
                    name="perSqFeetPrice"
                    value={formData.perSqFeetPrice}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                  <Select
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Available For"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <MenuItem value="apartment">Apartment</MenuItem>
                    <MenuItem value="land">Land</MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Bedroom</InputLabel>
                  <Select
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Bedroom"
                    name="bedroom"
                    value={formData.bedroom}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label2">Bathroom</InputLabel>
                  <Select
                    labelid="demo-simple-select-label2"
                    id="demo-simple-select2"
                    label="Bathroom"
                    name="bathroom"
                    value={formData.bathroom}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label3">Parking</InputLabel>
                  <Select
                    labelid="demo-simple-select-label3"
                    id="demo-simple-select3"
                    label="Parking"
                    name="parking"
                    value={formData.parking}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <TextField 
                  variant='outlined' 
                  label="Area (Sq. Feet)" 
                  fullWidth
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  ></TextField>
              </Grid>

              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <TextField 
                  variant='outlined' 
                  label="Year" 
                  fullWidth
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  ></TextField>
              </Grid>
              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label4">State</InputLabel>
                  <Select
                    labelid="demo-simple-select-label4"
                    id="demo-simple-select4"
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">Maharashtra</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label5">City</InputLabel>
                  <Select
                    labelid="demo-simple-select-label5"
                    id="demo-simple-select5"
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">Borivali</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
          </Grid>

          <Grid container spacing={{xs:2, md:5}} sx={{mt:5}}>
            <Grid size={{xs:12, sm:12, md:6, lg:6}}>
                <TextField 
                  variant='outlined' 
                  label="Property Address" 
                  fullWidth 
                  rows={5} 
                  multiline
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  ></TextField>
            </Grid>

            <Grid size={{xs:12, sm:12, md:6, lg:6}}>
                <TextField 
                  variant='outlined' 
                  label="Property Details" 
                  fullWidth 
                  rows={5} 
                  multiline
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  ></TextField>
            </Grid>
          </Grid>

          <Typography variant='p' component="p" sx={{mt:5,mb:2}}>Select Images</Typography>
          <Grid container spacing={{xs:2, md:5}}>
            <Grid size={{xs:12, sm:12, md:12, lg:12}}>

              {/* <List>
                
                <ListItem>
                  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="rows">
      
                    <label htmlFor="upload-file">
                      <Button variant="contained" component="span" size="small">
                      Select
                      </Button>
                    </label>
                    <Input
                        accept="image/*"
                        id="upload-file"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    <Typography variant='p' component="p" sx={{ml:3}}>Image 1 Not Selected</Typography>
                  </Box>
                </ListItem>

                <ListItem>
                  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="rows">
      
                    <label htmlFor="upload-file">
                      <Button variant="contained" component="span" size="small">
                      Select
                      </Button>
                    </label>
                    <Input
                        accept="image/*"
                        id="upload-file"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    <Typography variant='p' component="p" sx={{ml:3}}>Image 2 Not Selected</Typography>
                  </Box>
                </ListItem>

                <ListItem>
                  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="rows">
      
                    <label htmlFor="upload-file">
                      <Button variant="contained" component="span" size="small">
                      Select
                      </Button>
                    </label>
                    <Input
                        accept="image/*"
                        id="upload-file"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    <Typography variant='p' component="p" sx={{ml:3}}>Image 3 Not Selected</Typography>
                  </Box>
                </ListItem>

                <ListItem>
                  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="rows">
      
                    <label htmlFor="upload-file">
                      <Button variant="contained" component="span" size="small">
                      Select
                      </Button>
                    </label>
                    <Input
                        accept="image/*"
                        id="upload-file"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    <Typography variant='p' component="p" sx={{ml:3}}>Image 4 Not Selected</Typography>
                  </Box>
                </ListItem>

                <ListItem>
                  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="rows">
      
                    <label htmlFor="upload-file">
                      <Button variant="contained" component="span" size="small">
                      Select
                      </Button>
                    </label>
                    <Input
                        accept="image/*"
                        id="upload-file"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    <Typography variant='p' component="p" sx={{ml:3}}>Image 4 Not Selected</Typography>
                  </Box>
                </ListItem>

              </List> */}
                <List>
                    {images.map((_, index) => (
                      <ListItem key={index}>
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
                          <label htmlFor={`upload-file-${index}`}>
                            <Button variant="contained" component="span" size="small">
                              Select
                            </Button>
                          </label>
                          <Input
                            accept="image/*"
                            id={`upload-file-${index}`}
                            type="file"
                            onChange={(e) => handleFileChange(index, e)}
                            style={{ display: 'none' }}
                          />
                          <Typography variant='p' component="p" sx={{ ml: 3, color:images[index] ? "green" : "red" }}>
                            {images[index] ? `${images[index].name}` : `Not Selected`}
                          </Typography>
                        </Box>
                      </ListItem>
                    ))}
                </List>

            </Grid>
            <hr/>
            <Grid size={{xs:12, sm:6, md:12, lg:12}}>
                <Button variant='contained' size='large' onClick={handleClick}>Submit</Button>
            </Grid>
             
          </Grid>
        </Box>

      {/* Alerts */}
      <Snackbar open={openSnackBarSuccess} autoHideDuration={8000} onClose={handleCloseSnackBarSucccess}>
        <Alert
          onClose={handleCloseSnackBarSucccess}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          SuccessFully Added in the database !
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackBarError} autoHideDuration={8000} onClose={handleCloseSnackBarError}>
        <Alert
          onClose={handleCloseSnackBarError}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
         Something Bad Happend Check Your inputs or contact developer.
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}

export default Form