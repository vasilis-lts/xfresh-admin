import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import AddIcon from '@mui/icons-material/Add';
import React from "react";

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
  const [value, setValue] = React.useState(0);
  const [FormOpen, setFormOpen] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="mainContentBody" className="flex-col" style={{ marginTop: 40, padding: "0 10px" }} >

      <Box sx={{ display: 'flex', justifyContent: "space-between" }}>

        <Box sx={{ display: 'flex', alignItems: "center" }}>
          <Typography variant='h4' className='text-primary-color'>Grower</Typography>
          <SettingsIcon style={{ marginLeft: 10, marginTop: 3, color: "#37474F" }} />
        </Box>

        {/* <Box>
          <Button
            variant='contained'
            size='large'
            style={{ fontSize: 18 }}
            onClick={() => setFormOpen(true)}
          ><AddIcon /> New order</Button>
        </Box> */}

      </Box>

    </Box>
  )
}