
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import localFont from "next/font/local";
import "./globals.css";
import ClientProvider from './ClientProvider';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: ['100', '300', '400', '700'], // Adjust weights based on your design
  style: ['normal', 'italic'],
  display: 'swap', // Optimize font loading
});




export const metadata = {
  title: "Paradise Consulting",
  description: "Your Trusted Partner in Real Estate Solutions",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientProvider/>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
