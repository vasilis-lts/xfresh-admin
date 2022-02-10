import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
import { ReactComponent as UpicIcon } from '../assets/icons/upic.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Orders from './Orders';

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

export default function SidebarLayout() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [FormOpen, setFormOpen] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

          <ListItem button>
            <ListItemIcon>
              <LineChartIcon />
            </ListItemIcon>
            <ListItemText primary={"Sales"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GrowerIcon />
            </ListItemIcon>
            <ListItemText primary={"Grower"} />
          </ListItem>

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
        <Box id="mainContentHeader" sx={{ display: 'flex', justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h5' className='text-primary-color'>
              Hello John!
            </Typography>
            <Typography variant='h6' className='text-primary-color' style={{ marginLeft: 20, marginTop: 5, fontSize: 16 }}>
              You have <b>3 notifications</b> and <b>1 message</b> waiting for you
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: "center" }} className="sales-header-right">
            <div className="notification-container">
              <NotificationIcon />
              <div className="notification-counter">3</div>
            </div>
            <div className="notification-container">
              <MessageIcon />
              <div className="notification-counter">1</div>
            </div>
            <div className="account-container">
              <UpicIcon style={{ marginRight: 2 }} />
              <div className="flex-col">
                <div className="account-username">John Doe</div>
                <div className="account-occupation">Supply Manager</div>
              </div>
              <ArrowDropDownIcon />
            </div>
          </Box>
        </Box>
        <Box id="mainContentBody" className="flex-col" style={{ marginTop: 40, padding: "0 10px" }} >

          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>

            <Box sx={{ display: 'flex', alignItems: "center" }}>
              <Typography variant='h4' className='text-primary-color'>Sales</Typography>
              <SettingsIcon style={{ marginLeft: 10, marginTop: 3, color: "#37474F" }} />
            </Box>

            <Box>
              <Button
                variant='contained'
                size='large'
                style={{ fontSize: 18 }}
                onClick={() => setFormOpen(true)}
              ><AddIcon /> New order</Button>
            </Box>

          </Box>

          <Box sx={{ width: '100%', marginTop: 5 }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#3FC2D4"
                  }
                }}
              >
                <Tab label="Orders" {...a11yProps(0)} />
                <Tab label="Products" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Orders formOpen={FormOpen} setFormOpen={formOpen => setFormOpen(formOpen)} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Products (under development)
            </TabPanel>

          </Box>

        </Box>
      </MainContent>
    </Box>
  );
}