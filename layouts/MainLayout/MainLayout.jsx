import {useContext, useState} from 'react';
import Image from "next/image"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import Logo from "../../assets/Logo.png";
import MiniLogo from "../../assets/minilogo.png";


import ProfileOrLogout from '../../components/profile';


//mobile view
import TopHeader from "../../components/mobile/TopHeader"
import Navbar from "../../components/mobile/Navbar"
import { useRouter } from 'next/router';



const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  boxShadow: "none",
  ...(open && {
    marginLeft: drawerWidth,
    paddingRight: "1rem",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - calc(${theme.spacing(8)} + 1px))`
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(true);

  const handleDrawerAction = () => {
    setOpen(!open);
  };

  const router = useRouter()
  const routeString = router.pathname.toString()

  const [navState, setNavState] = useState("Dashboard")

  const handleDashboardClick = () => {
    router.push("/admin")
  }

  const handleEngagementsClick = () => {
    router.push("/all-engagements")
  }


  return (
    
      <Box
        sx={{
          width: "100vw",
          height: "100% !important",
          backgroundColor: "#F5F5F5",
          overflowY: "auto",
        }}
      >
        <Box // web and tab view
          sx={{ 
            display: {
              lg: 'flex',
              md: 'flex',
              sm: "none",
              xs: "none"
            },
            width: "100%",
            height: "100vh" 
          }}>
          <CssBaseline />

          <Drawer variant="permanent" open={open}>
            <DrawerHeader
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {open ? 
                <Box sx={{ width: { lg: "11.4rem", md: "10rem" }}}>
                  <Image
                    src={Logo}
                    alt="client logo"
                  />
                </Box> :
                <Image 
                  src={MiniLogo}
                  alt="client Mini logo"
                />}
            </DrawerHeader>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: '100vh'
              }}
            >
              <Box>
                <List>
                  <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        backgroundColor: `${routeString === "/admin" ? "#0B4CCB" : "white"}`,
                        "&:hover": {
                          backgroundColor: `${routeString === "/admin" ? "#0B4CCB" : "white"}`
                        }
                      }}
                      onClick={handleDashboardClick}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <DashboardIcon sx={{
                          color: `${routeString === "/admin" ? "white" : "rgba(0, 0, 0, 0.6)"}`
                        }} />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0, color: `${routeString === "/admin" ? "white" : "rgba(0, 0, 0, 0.6)"}` }} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        backgroundColor: `${routeString === "/all-engagements" ? "#0B4CCB" : "white"}`,
                        "&:hover": {
                          backgroundColor: `${routeString === "/all-engagements" ? "#0B4CCB" : "white"}`
                        }
                      }}
                      onClick={handleEngagementsClick}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <PeopleAltIcon sx={{
                          color: `${routeString === "/all-engagements" ? "white" : "rgba(0, 0, 0, 0.6)"}`
                        }} />
                      </ListItemIcon>
                      <ListItemText primary="All Engagements" sx={{ opacity: open ? 1 : 0, color: `${routeString === "/all-engagements" ? "white" : "rgba(0, 0, 0, 0.6)"}` }} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Drawer>

          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton 
                onClick={handleDrawerAction}
                sx={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  marginRight: "1.2rem"
                }}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
              
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <ProfileOrLogout />
              </Box>
            </Toolbar>
          </AppBar>

          <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%", height: '100vh', backgroundColor: "#F5F5F5"}}>
            
            <DrawerHeader />
            
            {children}
          </Box>
        </Box>

        <Box              // mobile view
          sx={{ 
            display: {
              lg: 'none',
              md: 'none',
              sm: "block",
              xs: "block"
            },
            width: "100%",
            height: "100vh" 
          }}
        >
          <TopHeader />

          {children}

          <Navbar navState={navState} setNavState={setNavState}  />
        </Box>
      </Box>
  );
}