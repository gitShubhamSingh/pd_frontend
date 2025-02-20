"use client"
import React from 'react'
import Mainfooter from '@/components/main-footer';
import { usePathname } from "next/navigation";

import theme from '@/app/Theme'
import { Container, Grid2, Paper, ThemeProvider, Typography, TextField, Button, CssBaseline, Snackbar, Alert } from '@mui/material';
import { objectShallowCompare } from '@mui/x-data-grid/hooks/utils/useGridSelector';
import { BASE_API } from '@/components/api';
import Cookies from 'js-cookie';

const Login = () => {

    const pathname = usePathname();
    const isAdminPage = pathname.startsWith("/admin");// Exclude admin pages
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [isValidPassword, setIsValidPassword] = React.useState(true)
    const [openSnackBarError, setOpenSnackBarError] = React.useState(false);

    // email change
    const emailChange = (e)=>{
        setEmail(e.target.value)
        setIsValidEmail(true)
    }
    const passwordChange = (e)=>{
        setPassword(e.target.value)
        setIsValidPassword(true)
    }

    const checkValidation = () =>{

        // checking email Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valObj = {
            email: true,
            password: true
        }
        if (email.trim() === "" || !emailRegex.test(email)){
            valObj.email = false
        }
        if (password.trim() === ""){
            valObj.password = false
        }
        if (Object.values(valObj).indexOf(false) == -1){
            submitRequest()
        }else{
            setIsValidEmail(valObj.email)
            setIsValidPassword(valObj.password)
        }
    }

    // if every thing is working fine then only submit request
    const submitRequest = () =>{
        
        // Here  we will hit the login api and if the respose is ok then save cookies 
        fetch(`${BASE_API}/apiAdmin/login/`,{
            method:'POST',
            body:JSON.stringify({
                email:email,
                password:password
            }),
            headers:{
                'Content-Type':'application/json',
            }
        }).then(response => response.json()).then(response=>{
            
            if (response.status === 200){
                Cookies.set('email',response.email)
                Cookies.set('status',response.status)  
                window.location.href = "/admin"      
            }else if (response.status === 401) {
                setOpenSnackBarError(true)
            }
        })
    }

    const handleCloseSnackBarError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBarError(false);
    };


    React.useEffect(()=>{
        const myCookie = Cookies.get('email',{path:'/', expires:1});
        if(myCookie){
          console.log("Cookie is Present", myCookie)
          window.location.href="/admin"
        }else{
        }
      },[])

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth="sm" sx={{mt:20, mb:20}}>
            <Paper elevation={10} sx={{p:10, border:10}}>
                <Typography variant='h3'>Login</Typography>
                <Grid2 container>
                    <Grid2 size={{xs:12}} sx={{mt:2}}>
                        <TextField 
                            label="Email" 
                            id="email" 
                            variant="outlined" 
                            inputMode='email' 
                            fullWidth 
                            sx={{color:'#fff'}} 
                            required
                            onChange={emailChange}
                            error={!isValidEmail}
                            />
                    </Grid2>
                    <Grid2 size={{xs:12}} sx={{mt:2}}>
                    <TextField 
                        label="Password" 
                        id="password" 
                        variant="outlined" 
                        type="password" 
                        fullWidth 
                        required
                        onChange={passwordChange}
                        error={!isValidPassword}
                       />
                    </Grid2>
                    <Grid2 size={{xs:12}} sx={{mt:2}}>
                        <Button 
                            variant='contained' 
                            size="medium" 
                            onClick={checkValidation}
                            >Login</Button>
                    </Grid2>
                </Grid2>
            </Paper>

        </Container>

      {!isAdminPage && <Mainfooter />}
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

export default Login