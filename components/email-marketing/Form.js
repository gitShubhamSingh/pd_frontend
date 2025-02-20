"use client"
import theme from '@/app/Theme'
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

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
  return (
    <ThemeProvider theme={theme}>
        
    </ThemeProvider>
  )

}

export default Form