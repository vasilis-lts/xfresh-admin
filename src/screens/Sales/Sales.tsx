import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Orders from "./components/Orders";
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import Products from "./components/Products";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

export default function Sales() {
  const [value, setValue] = React.useState(0);
  const [OrdersFormOpen, setOrdersFormOpen] = React.useState<boolean>(false);
  const [ProductsFormOpen, setProductsFormOpen] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="mainContentBody" className="flex-col" style={{ marginTop: 40, padding: "0 10px" }} >

      <Box sx={{ display: 'flex', justifyContent: "space-between" }}>

        <Box sx={{ display: 'flex', alignItems: "center" }}>
          <Typography variant='h4' className='text-primary-color'>Sales</Typography>
          <SettingsIcon style={{ marginLeft: 10, marginTop: 3, color: "#37474F" }} />
        </Box>

        {value === 0 &&
          <Box>
            <Button
              variant='contained'
              size='large'
              style={{ fontSize: 18 }}
              onClick={() => setOrdersFormOpen(true)}
            ><AddIcon /> New order</Button>
          </Box>}

        {value === 1 &&
          <Box>
            <Button
              variant='contained'
              size='large'
              style={{ fontSize: 18 }}
              onClick={() => setProductsFormOpen(true)}
            ><AddIcon /> New product</Button>
          </Box>}

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

          {value === 0 && <Orders formOpen={OrdersFormOpen} setFormOpen={formOpen => setOrdersFormOpen(formOpen)} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {value === 1 && <Products formOpen={ProductsFormOpen} setFormOpen={formOpen => setProductsFormOpen(formOpen)} />}
        </TabPanel>
      </Box>

    </Box>
  )
}