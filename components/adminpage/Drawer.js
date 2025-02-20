"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';



// icons
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FoundationIcon from '@mui/icons-material/Foundation';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import Logo from '@/assets/logo.png'

import MailIcon from '@mui/icons-material/Mail';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, ThemeProvider, Collapse } from '@mui/material';
import theme from '@/app/Theme';
import Link from 'next/link';

const drawerWidth = 300;

const listItem = [
    {
        id:0,
        text:'Home',
        icon:<AppsIcon sx={{color:theme.palette.primary.main}}/>,
        link:'/admin'
    },
    {
      id:1, 
      text:"Property",
      icon:<DomainAddIcon sx={{color:theme.palette.primary.main}}/>,
      link:''
    },
    {
        id:1,
        text:'Add Property',
        icon:<DomainAddIcon sx={{color:theme.palette.primary.main}}/>,
        link:'/admin/add'
    },
    {
        id:2,
        text:'Update Property',
        icon:<DisplaySettingsIcon sx={{color:theme.palette.info.main}}/>,
        link:'/admin/update'
    },
    {
        id:3,
        text:'Delete Property',
        icon:<HighlightOffIcon sx={{color:theme.palette.secondary.main}}/>,
        link:'/admin/delete'
    },
    {
        id:4,
        text:'All Properties',
        icon:<FormatAlignJustifyIcon sx={{color:theme.palette.success.main}}/>,
        link:'/admin/allproperties'
    },
    
]




function ResponsiveDrawer(props) {
  
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openListProperty, setOpenListProperty] = React.useState(false);
  const [openListAgent, setOpenListAgent] = React.useState(false);
  const [openListLeads, setOpenListLeads] = React.useState(false);
  const [openListHome, setOpenListHome] = React.useState(false);
  const [openListMarketing, setOpenListMarketing] = React.useState(false);
  const [openListReportAndAnalytics, setOpenListReportAndAnalytics] = React.useState(false);
  const [openListSettings, setOpenListSettings] = React.useState(false);
  


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClickLogout = () => {
    Cookies.remove('email', {path:'/'})
    Cookies.remove('status', {path:'/'})
    window.location.href="/login"
  } 

  const handleClick = (id) => {
    
    if (id==1){
      window.location.href="/admin"
    }else if (id==2){
       setOpenListProperty(!openListProperty);
    }else if (id ==3){
      setOpenListAgent(!openListAgent);
    }else if(id == 4){
      setOpenListLeads(!openListLeads);
    }else if(id == 5){
      setOpenListMarketing(!openListMarketing);
    }else if(id == 6){
      setOpenListReportAndAnalytics(!openListReportAndAnalytics);
    }else if(id == 7){
      setOpenListSettings(!openListSettings);
    }
  };

  const drawerList = [
    {
      id:1,
      text:'Home',
      icon:<FoundationIcon sx={{color:theme.palette.primary.main}}/>,
      openList:openListHome,
      setOpenList:setOpenListHome,
      link:'/admin',
      subItem:[
      ]
    },
    {
      id:2,
      text:'Property',
      icon:<DomainAddIcon sx={{color:theme.palette.secondary.main}}/>,
      openList:openListProperty,
      setOpenList:setOpenListProperty,
      subItem:[
        {
          dividerStatus:true,
          dividerItem:'Property Management',
          id:2.1,
          text:'Search Property',
          link:'/admin/search-property'
        },
        {
          id:2.2,
          text:'Add New',
          link:'/admin/add-property'
        },
        {
          id:2.3,
          text:'Update',
          link:'/admin/update-property'
        },
        {
          id:2.4,
          text:'Delete',
          link:'/admin/delete-property'
        },
        {
          dividerStatus:true,
          dividerItem:'Property Listing',
          id:2.5,
          text:'View All',
          link:'/admin/allproperties'
        },
        {
          id:2.6,
          text:'Track Status',
          link:'/admin/status-property'
        },
        {
          id:2.7,
          text:'Assign to Agent',
          link:'/admin/assign-agent-property'
        },
        {
          id:2.8,
          text:'Analytics and Report',
          link:'/admin/analytics-property'
        }
      ]
    },
    // {
    //   id:3,
    //   text:'Agent',
    //   icon:<SupportAgentIcon sx={{color:theme.palette.warning.main}}/>,
    //   openList:openListAgent,
    //   setOpenList:setOpenListAgent,
    //   subItem:[
    //     {
    //       dividerStatus:true,
    //       dividerItem:"Agent Profile",
    //       id:3.1,
    //       text:'Add New',
    //       link:'/admin/add-agent'
    //     },
    //     {
    //       id:3.2,
    //       text:'View Agent',
    //       link:'/admin/profile-agent'
    //     },
    //     {
    //       id:3.6,
    //       text:'Commission',
    //       link:'/admin/com-agent'
    //     },
    //     {
    //       id:3.4,
    //       text:'Performance',
    //       link:'/admin/performance-agent'
    //     },
         
    //     {
    //       id:3.5,
    //       text:'Availability',
    //       link:'/admin/avail-agent'
    //     },
    //     {
    //       dividerStatus:true,
    //       dividerItem:"Team Management",
    //       id:3.3,
    //       text:'Assign Properties',
    //       link:'/admin/assign-agent'
    //     },
    //     {
    //       id:3.6,
    //       text:'Set Leads Limit',
    //       link:'/admin/leads-limit-agent'
    //     }
    //   ]
    // },
    {
      id:4,
      text:'Leads',
      icon:<LeaderboardIcon sx={{color:theme.palette.info.main}}/>,
      openList:openListLeads,
      setOpenList:setOpenListLeads,
      subItem:[
        {
          id:4.2,
          text:'All Leads',
          link:'/admin/all-leads'
        },
        {
          dividerStatus:true,
          dividerItem:"Lead Capture",
          id:4.1,
          text:'Add New',
          link:'/admin/add-leads'
        },
        {
          id:4.2,
          text:'Website Forms',
          link:'/admin/all-leads'
        },
        {
          id:4.2,
          text:'Phone Calls',
          link:'/admin/all-leads'
        },
        
        {
          id:4.2,
          text:'Email Campaign',
          link:'/admin/all-leads'
        },
        
        {
          id:4.2,
          text:'Social Media Integration',
          link:'/admin/all-leads'
        },
        {
          dividerStatus:true,
          dividerItem:"Lead Qualification",
          id:4.3,
          text:'Contact Information',
          link:'/admin/assign-leads'
        },
       
        {
          id:4.5,
          text:'Property Preference',
          link:'/admin/track-leads'
        },
        {
          id:4.6,
          text:'Contact History',
          link:'/admin/source-leads'
        }, 
        {
          id:4.7,
          text:'Lead Scoring',
          link:'/admin/appointment-leads'
        }, {
          id:4.9,
          text:'Analytics and Report',
          link:'/admin/analytics-leads'
        }, 
        {
          dividerStatus:true,
          dividerItem:"Lead Assignment",
          id:4.4,
          text:'Assign Leads to Agent',
          link:'/admin/automated-leads'
        },
        {
          id:4.4,
          text:'Automated Lead Routing',
          link:'/admin/automated-leads'
        },
      ]
    },
    {
      id:5,
      text:'Marketing',
      icon:<StorefrontIcon sx={{color:theme.palette.error.main}}/>,
      openList:openListMarketing,
      setOpenList:setOpenListMarketing,
      subItem:[
        {
          dividerStatus:true,
          dividerItem:"Email Marketing",
          id:5.1,
          text:'Create Email Campaigns',
          link:'/admin/email-marketing'
        },
        {
          id:5.2,
          text:'Send Automated Emails',
          link:'/admin/auomated-email'
        },
        {
          id:5.3,
          text:'Track Email Performance',
          link:'/admin/track-email-performance'
        },
        {
          dividerStatus:true,
          dividerItem:"Social Media Marketing",
          id:5.4,
          text:'Social Media Posting',
          link:'/admin/social-media-posting'
        },
        {
          id:5.5,
          text:'Social Media Ads',
          link:'/admin/social-media-ads'
        },
        {
          id:5.6,
          text:'Social Media Analytics',
          link:'/admin/social-media-analytics'
        }, 
        {
          dividerStatus:true,
          dividerItem:"Website Integration",
          id:5.7,
          text:'Property Listings on Website',
          link:'/admin/property-listing-website'
        }, {
          id:5.9,
          text:'Website Analytics',
          link:'/admin/website-analytics'
        }, 
      ]
    },
    {
      id:6,
      text:'Report & Analytics',
      icon:<AssessmentIcon sx={{color:theme.palette.success.light}}/>,
      openList:openListReportAndAnalytics,
      setOpenList:setOpenListReportAndAnalytics,
      subItem:[
        {
          id:6.1,
          text:'Property Performance & Report',
          link:'/admin/email-marketing'
        },
        {
          id:6.2,
          text:'Agent Performance Report',
          link:'/admin/auomated-email'
        },
        {
          id:6.3,
          text:'Financial Reports',
          link:'/admin/track-email-performance'
        },
        {
          id:6.4,
          text:'Lead Conversion Reports',
          link:'/admin/social-media-posting'
        },
        {
          id:6.5,
          text:'Customer Satisfaction Report',
          link:'/admin/social-media-ads'
        },
      ]
    },
    {
      id:7,
      text:'Settings',
      icon:<SettingsSuggestIcon sx={{color:theme.palette.error.primary}}/>,
      openList:openListSettings,
      setOpenList:setOpenListSettings,
      subItem:[
        {
          id:7.1,
          text:'Lead Distribution Rule',
          link:'/admin/email-marketing'
        },
        {
          id:7.2,
          text:'Add Broker',
          link:'/admin/auomated-email'
        },
        {
          id:7.3,
          text:'Billing',
          link:'/admin/track-email-performance'
        },
        {
          id:7.4,
          text:'Help & Support',
          link:'/admin/social-media-posting'
        }
      ]
    }
  ]
  const drawer = (
    <>
      <Toolbar />
      <List>
        {drawerList.map((item, parentKey)=>(<React.Fragment key={`parent-${parentKey}`}>
          <ListItemButton onClick={()=>handleClick(item.id)}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{fontSize:10}} />
            {item.id != 1?item.openList ? <ExpandLess /> : <ExpandMore />:null}
          </ListItemButton>
          {item.subItem.map((item2, childKey)=>
          <Collapse in={item.openList} timeout="auto" unmountOnExit key={`child-${parentKey}-${childKey}`}>
            <List component="div" disablePadding sx={{backgroundColor:theme.palette.primary.light}}> 
              {item2.dividerStatus ? <Divider textAlign='left' sx={{pt:2, fontSize:12, color:theme.palette.primary.main}}>{item2.dividerItem}</Divider>:null}
              {/* <Divider textAlign='left' sx={{pt:1}}>{item2.dividerItem}</Divider> */}
              <ListItemButton sx={{ pl: 7 }} component={Link} to={item2.link}>
                <ListItemText 
                  primary={item2.text}
                  sx={{fontSize:1, '& .MuiTypography-root': { fontSize: '13px' }}} />
              </ListItemButton>
            </List>
          </Collapse>
          )}
        </React.Fragment>
        ))}
      </List>
     
    </>
  );

  // Remove this const when copying and pasting into your project.
  const container = windows !== undefined ? () => window().document.body : undefined;



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1,  }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Image
                  src={Logo}
                  width="50"
                  alt="logo"
              />
            <Typography variant="h6" noWrap component="div" sx={{ml:1, fontSize:10}}>
              Paradise Admin 
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button 
              onClick={handleClickLogout}
              variant='contained' 
              color='secondary' 
              size="small" 
              sx={{textTransform:'none'}}>LogOut</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
