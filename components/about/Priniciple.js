import { Button, Container, Grid2, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

import theme from '@/app/Theme'

// icons
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Priniciple = () => {

    const items = [
        {
            id:1,
            heading:"In trust we trust.",
            paragraph:"Trust is our #1 value. We build trust with stakeholders by leading with ethics and through the integrity of our technology. We are dedicated to transparency, deep listening, and delivering on our commitments. ",
            buttonText:"Start Building Trust",
            image:<SupportAgentIcon/>
        },
        {
            id:2,
            heading:"When our clients succeed, we succeed.",
            paragraph:"That’s why we empower them to accomplish remarkable milestones. We continually innovate and enhance our solutions to offer our partners new opportunities for achieving even greater success.",
            buttonText:"Read Success Stories",
            image:<ThumbUpIcon/>
        },
        {
            id:3,
            heading:"Sparking change through innovation.",
            paragraph:"Our clients’ insights drive us to create solutions that meet their unique needs. By delivering continuous updates and introducing new initiatives, we give them the tools they need to stay ahead in the real estate industry.",
            buttonText:"See latest innovation",
            image:<EmojiEventsIcon/>
        },
        

    ]

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{mb:10}}>
            <Typography variant='h3' component="p" sx={{textAlign:"center"}}> Driven by our principles.</Typography>
            <Typography variant='p' component="p" sx={{mt:5,textAlign:"center",ml:10, mr:10}}>Our core principles shape everything we do as a company and as individuals. Our mission is to empower one another, deliver exceptional solutions to our clients, and inspire the entire real estate industry through our dedication and actions.</Typography>

            <Grid2 container>
                {items.map((item, key)=>
                    <Grid2 size={{xs:12, sm:12, md:4, lg:4}} key={key} sx={{p:5}}>
                        <Typography variant='h5' component="p" sx={{mt:10, fontWeight:'bold'}}>{item.heading}</Typography>
                        <Typography variant='p' component='p' sx={{mt:2}}>{item.paragraph}</Typography>
                        <Button 
                            variant='outlined' 
                            size='small' 
                            sx={{mt:5, textTransform:'none','&:hover':{boxShadow:10}}}
                            >{item.buttonText}</Button>
                    </Grid2>

                )}
                <Grid2 size={{}}>

                </Grid2>
            </Grid2>
        </Container>
    </ThemeProvider>
  )
}

export default Priniciple