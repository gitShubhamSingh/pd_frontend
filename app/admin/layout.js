"use client"
import React from 'react';
import ResponsiveDrawer from '@/components/adminpage/Drawer';
import { Box, Toolbar } from '@mui/material';
import Cookies from 'js-cookie';

const AdminLayout = ({ children }) => {
  
  React.useEffect(()=>{
    const myCookie = Cookies.get('email',{path:'/', expires:1});
    
    if(!myCookie){
      window.location.href="/login"
    }else{
      
    }
  },[])

  return (
    <Box sx={{ 
      display: 'flex',
      transform: 'scale(0.8)', // Zoom out
      transformOrigin: 'top left', // Scale from the top-left
      width: 'calc(100% / 0.8)', // Compensate width for scaling
      minHeight: 'calc(100vh / 0.8)', // Compensate height for scaling
      overflow: 'hidden',
      
      }}>
        
      <ResponsiveDrawer />
      
      <Box
        component="main"
        sx={{
          flexGrow: 900,
          p: 3,
          width: { sm: `calc(100% - 240px)` }, 
          
        }}
      >
        <Toolbar /> 
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
