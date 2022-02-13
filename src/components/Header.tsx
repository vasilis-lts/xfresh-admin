import { Box, Typography } from "@mui/material";
import { ReactComponent as NotificationIcon } from '../assets/icons/notification.svg';
import { ReactComponent as MessageIcon } from '../assets/icons/message.svg';
import { ReactComponent as UpicIcon } from '../assets/icons/upic.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {

  return (
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
  )
}