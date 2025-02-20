// theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#303841', 
      light:'#e0e0e0',
      dark:'#1e262d',
      
    },
    secondary: {
      main: '#dc004e',
      light: '#f50057',
      dark:"#9a0036"
    },
    error:{
        main:"#dc004e",
        light:"#ff4081",
        dark:"#9a0036"
    },
    warning:{
        main:"#FF9800",
        light:"#FFB74D",
        dark:"#F57C00"
    },
    info:{
        main:"#2196F3",
        light:"#64B5F6",
        dark:"#1976D2"
    },
    background:{
        paper:"#FFFFFA"
    }
  },
  typography:{
      fontFamily:"montserrat"
  }
});

theme = responsiveFontSizes(theme)

export default theme;
