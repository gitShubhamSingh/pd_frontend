
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import "./globals.css";
import ClientProvider from './ClientProvider';
import theme from './Theme';
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
      </head>
      <body className={montserrat.className}>
        <ClientProvider/>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
