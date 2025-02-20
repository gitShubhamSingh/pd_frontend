'use client';
import Mainheader from '@/components/main-header';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { usePathname } from "next/navigation";

import theme from './Theme';

export default function ClientProvider({ children }) {
  const pathname = usePathname();
  
  // Exclude admin pages
  const isAdminPage = pathname.startsWith("/admin");
  


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {!isAdminPage && <Mainheader />}
        {children}
    </ThemeProvider>
  );
}