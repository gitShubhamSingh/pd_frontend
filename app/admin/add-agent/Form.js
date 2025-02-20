"use client"
import React from 'react'

import theme from '@/app/Theme'
import { ThemeProvider, Box, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'

import BasicDatePicker from './DatePicker'

const form = [
    {
        type:'textField',
        name:'agentLicenseNumber',
        label:'Agent License Number'
    },
    {
        type:'datePicker',
        name:'licenseDate',
        label:'License Expiration Date'
    },
    {
        type:'textField',
        name:'licensedState',
        label:'Licensed State'
    },
    {
        type:'textField',
        name:'firstName',
        label:'First Name'
    },
    {
        type:'textField',
        name:'lastName',
        label:'Last Name'
    },
    {
        type:'datePicker',
        name:'dateField',
        label:'Date Of Birth'
    },
    {
        type:'textField',
        name:'phoneNumber',
        label:'Phone Number'
    },
    {
        type:'textField',
        name:'email',
        label:'Email'
    },
    {
        type:'textField',
        name:'yearOfExperiance',
        label:"Year's Of Experiance"
    },
    {
        type:'textField',
        name:'specialization',
        label:'Specialization'
    },
    
    
    

]


const Form = () => {

    const handleDateChange = (date) => {
        console.log("Selected date:", date.year());
        console.log("Selected date:", date.month());
        console.log("Selected date:", date.date());      
    };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs:2, md:5}}>
                {form.map((item, key)=>
                    <Grid size={{xs:12, sm:12, md:4, lg:4}} key={key}>
                        {item.type == "textField"?
                            <TextField 
                                name={item.name}
                                variant='outlined' 
                                label={item.label} 
                                fullWidth
                                ></TextField>:
                                item.type == 'datePicker'?
                            <BasicDatePicker label={item.label} fullWidth onDateChange={handleDateChange}/>:null}
                    </Grid>
                    )}
            </Grid>
            <Button variant="contained" sx={{mt:3}}>Save</Button>
        </Box>
    </ThemeProvider>
  )
}

export default Form