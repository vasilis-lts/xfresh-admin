import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { ReactComponent as ChevronIcon } from '../../../assets/icons/chevron.svg';
import { ReactComponent as UploadIcon } from '../../../assets/icons/upload.svg';
import React from "react";
import { useParams } from "react-router-dom";
import PersonalProfile from "./PersonalProfile/PersonalProfile";
import Transport from "./Transport/Transport";

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

export default function Grower() {
  let { growerslug } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="mainContentBody" className="flex-col" style={{ marginTop: 40, padding: "0 10px" }}>
      <Box sx={{ display: 'flex', justifyContent: "space-between" }}>

        <Box sx={{ display: 'flex', alignItems: "center" }}>
          <Typography variant='h4' className='text-lightblue'>Grower</Typography>
          <ChevronIcon style={{ marginLeft: 10, marginRight: 10, marginTop: 3, color: "#B0BEC5", transform: "rotate(-90deg)" }} />
          <Typography variant='h4' className="text-primary-color">{growerslug}</Typography>
        </Box>

        <Box>
          <Button
            variant='contained'
            color="success"
            size='large'
            style={{ fontSize: 18 }}
            disableElevation
            onClick={() => {
              let id = '';

              switch (value) {
                case 0:
                  id = 'ppFormButton';
                  break;
                case 1:
                  id = 'trFormButton';
                  break;
                default:
                  break;
              }

              const formButton = document.getElementById(id);
              formButton?.click();
            }}
          ><UploadIcon style={{ color: "white", marginRight: 3, fontSize: 18 }} /> Save</Button>
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
            <Tab label="Personal profile" {...a11yProps(0)} />
            <Tab label="Transport" {...a11yProps(1)} />
            <Tab label="Product portfolio" {...a11yProps(2)} />
            <Tab label="Forecasting" {...a11yProps(3)} />
            <Tab label="Performance" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

          {value === 0 &&
            <PersonalProfile />
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          {value === 1 &&
            <Transport />
            // <Products formOpen={ProductsFormOpen} setFormOpen={formOpen => setProductsFormOpen(formOpen)} />
          }
        </TabPanel>

        <TabPanel value={value} index={2}>
          {value === 2 &&
            <p>Product portfolio</p>
            // <Products formOpen={ProductsFormOpen} setFormOpen={formOpen => setProductsFormOpen(formOpen)} />
          }
        </TabPanel>

        <TabPanel value={value} index={3}>
          {value === 3 &&
            <p>Forecasting</p>
            // <Products formOpen={ProductsFormOpen} setFormOpen={formOpen => setProductsFormOpen(formOpen)} />
          }
        </TabPanel>

        <TabPanel value={value} index={4}>
          {value === 4 &&
            <p>Performance</p>
            // <Products formOpen={ProductsFormOpen} setFormOpen={formOpen => setProductsFormOpen(formOpen)} />
          }
        </TabPanel>

      </Box>
    </Box>
  )
}