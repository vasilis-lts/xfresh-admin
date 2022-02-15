import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import AddIcon from '@mui/icons-material/Add';

export default function GrowerOverview() {

  return (
    <Box id="mainContentBody" className="flex-col" style={{ marginTop: 40, padding: "0 10px" }}>
      <Box sx={{ display: 'flex', justifyContent: "space-between" }}>

        <Box sx={{ display: 'flex', alignItems: "center" }}>
          <Typography variant='h4' className='text-primary-color'>Growers</Typography>
          <SettingsIcon style={{ marginLeft: 10, marginTop: 3, color: "#37474F" }} />
        </Box>

        <Box>
          <Button
            variant='contained'
            size='large'
            style={{ fontSize: 18 }}
          // onClick={() => setFormOpen(true)}
          ><AddIcon /> New grower</Button>
        </Box>

      </Box>




    </Box>
  )
}