import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Orders from "./components/Orders";
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import Products from "./components/Products";
import styled from "@emotion/styled";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #888`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowIcon style={{ transform: 'rotate(-90deg)', fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, .05)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: 10,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 10,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

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

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChangeTabs =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


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

      <div className="normalTabs">
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
      </div>

      <div className="mobileTabs">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChangeTabs('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Orders</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {expanded === 'panel1' && <Orders formOpen={OrdersFormOpen} setFormOpen={formOpen => setOrdersFormOpen(formOpen)} />}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeTabs('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Products</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChangeTabs('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Customers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>


    </Box>
  )
}