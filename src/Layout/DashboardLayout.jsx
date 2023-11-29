/* eslint-disable react/prop-types */
import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import useRole from '../Hooks/useRole';
import { FaBookmark, FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { GiPodiumWinner } from "react-icons/gi";
import { IoIosPodium } from "react-icons/io";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [isAdmin,isPending] = useRole();

  const userRole = isAdmin?.role;
  console.log(userRole);

  if(isPending){
    return <p>......</p>
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const userRoute = [
    {path:'/',name:"Home",icon:<FaHome/>},
    {path:'/dashboard/liderboard',name:'Liderboard',icon:<IoIosPodium />},
    {path:'/dashboard/registeredcontest',name:'Register Contest',icon:<FaBookmark />},
    {path:'/dashboard/winningcontest',name:'Winning Contest',icon:<GiPodiumWinner />},
    {path:'/dashboard/myprofile',name:'My Profile',icon:<FaUser />},
  ]
  const AdminRoute = [
    {path:'/',name:"Home",icon:<FaHome/>},
    {path:'/dashboard/manageuser',name:'All Users',icon:<FaUsers />},
    {path:'/dashboard/managecontest',name:'Manage Contest',icon:<FaBookmark />},
  ]
  const creatorRoute = [
    {path:'/',name:"Home",icon:<FaHome/>},
    {path:'/dashboard/addcontest',name:'Add Contest',icon:<FaUsers />},
    {path:'/dashboard/createdcontest',name:'Created Contest',icon:<FaBookmark />},
  ]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
         {
            userRole === 'user' ? 
            userRoute?.map((route,index)=><NavLink to={route.path} key={index}>
            <ListItem disablePadding>
               <ListItemButton>
                   <ListItemIcon sx={{fontSize:'20px'}}>{route.icon}</ListItemIcon>
                   <ListItemText>{route.name}</ListItemText>
               </ListItemButton>
             </ListItem>
            </NavLink>) 
            : userRole === 'creator' ? creatorRoute?.map((route,index)=><NavLink to={route.path} key={index}>
            <ListItem disablePadding>
               <ListItemButton>
                   <ListItemIcon sx={{fontSize:'20px'}}>{route.icon}</ListItemIcon>
                   <ListItemText>{route.name}</ListItemText>
               </ListItemButton>
             </ListItem>
            </NavLink>)
            : AdminRoute?.map((route,index)=><NavLink to={route.path} key={index}>
            <ListItem disablePadding>
               <ListItemButton>
                   <ListItemIcon sx={{fontSize:'20px'}}>{route.icon}</ListItemIcon>
                   <ListItemText>{route.name}</ListItemText>
               </ListItemButton>
             </ListItem>
            </NavLink>)
         }
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="lg">
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="warning"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Codding Contest
          </Typography>
        </Toolbar>
      </AppBar>
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
          onClose={handleDrawerToggle}
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      <Outlet/>
      </Box>
    </Box>
    </Container>
  );
}


export default ResponsiveDrawer;