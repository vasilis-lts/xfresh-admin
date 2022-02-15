import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { Routes, Route, Link } from "react-router-dom";

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg';
import { ReactComponent as LineChartIcon } from '../assets/icons/linechart.svg';
import { ReactComponent as GrowerIcon } from '../assets/icons/grower.svg';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as ExceptionIcon } from '../assets/icons/exception.svg';
import { ReactComponent as NotificationIcon } from '../assets/icons/notification.svg';
import { ReactComponent as MessageIcon } from '../assets/icons/message.svg';

import Header from './Header';
import Sales from '../screens/Sales/Sales';
import GrowerOverview from '../screens/GrowerOverview/GrowerOverview';
import Grower from '../screens/GrowerOverview/Grower/Grower';

const drawerWidth = 196;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 65,
  // width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(9)} + 1px)`,
  // },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 30,
  marginTop: 5,
  padding: theme.spacing(0, 2.5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  '& svg': {
    marginLeft: 5
  },

}));

const MainContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  padding: 20,
  width: "100%",
  paddingTop: 25,

  '& .notification-container': {
    margin: "0 15px",
    position: "relative"
  },
  '& .notification-container svg': {
    color: "#B0BEC5",
    width: 18,
    height: 18
  },
  '& .notification-counter': {
    position: "absolute",
    bottom: 3,
    left: -12,
    fontSize: 10,
    borderRadius: "50%",
    border: "1px solid #FF7024",
    color: "#fff",
    padding: "1px 5px 0 5px",
    backgroundColor: "#FF7024"
  },
  '& .account-container': {
    display: "flex", alignItems: "center", margin: "0 10px 0 20px"
  },
  '& .account-username': {
    fontSize: 16,
    color: "#0A3450"
  },
  '& .account-occupation': {
    fontSize: 13,
    color: "#B4BED1"
  }
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
      '& #drawerList span': {
        display: "initial"
      }
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      '& #drawerList span': {
        display: "none"
      }
    }),
    '& svg': {
      fill: 'white'
    },
    '& #drawerList svg': {
      marginLeft: 8
    },
    '& #drawerList span': {
      fontSize: 18
    },
    '& .MuiListItemIcon-root': {
      minWidth: "47.5px"
    }
  }),
);

export default function SidebarLayout() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open} id="leftDrawer">
        <DrawerHeader id="drawerHeader">

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => { open ? handleDrawerClose() : handleDrawerOpen() }}
            edge="start"
          // sx={{
          //   marginRight: '36px',
          //   ...(open && { display: 'none' }),
          // }}
          >
            <LogoIcon />
          </IconButton>

        </DrawerHeader>
        <List id="drawerList">

          <Link to="/sales">
            <ListItem button>
              <ListItemIcon>
                <LineChartIcon />
              </ListItemIcon>
              <ListItemText primary={"Sales"} />
            </ListItem>
          </Link>

          <Link to="/grower">
            <ListItem button>
              <ListItemIcon>
                <GrowerIcon />
              </ListItemIcon>
              <ListItemText primary={"Grower"} />
            </ListItem>
          </Link>

          <ListItem button>
            <ListItemIcon>
              <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary={"Planning"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ExceptionIcon />
            </ListItemIcon>
            <ListItemText primary={"Exceptions"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <NotificationIcon />
            </ListItemIcon>
            <ListItemText primary={"Notifications"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
          </ListItem>

        </List>

      </Drawer>
      <MainContent>

        <Header />

        <Routes>
          <Route path="/" element={<Sales />} />
          <Route path="sales" element={<Sales />} />
          <Route path="grower" element={<GrowerOverview />} />
          <Route path="grower/:growerslug" element={<Grower />} />
        </Routes>

      </MainContent>
    </Box>
  );
}