import styled from "@emotion/styled";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as ResetIcon } from '../assets/icons/reset.svg';

export default function Orders() {

  const OrdersContainer = styled('div')(({ theme }) => ({

    '& .MuiSelect-select': {
      borderColor: "#fff",
      width: 200,
      paddingLeft: 26,
      display: "flex",
      alignItems: "center",
    },
    '& .MuiSelect-select svg': {
      marginTop: -2,
      marginRight: 5
    },

    '& .MuiList-root svg': {
      marginRight: 5
    },
    select: {
      '&:before': {
        borderColor: "#fff",
      },
      '&:after': {
        borderColor: "#fff",
      }
    },

  }));

  const StyledSelect = styled(Select)(`
  & .${outlinedInputClasses.notchedOutline} {
    border-color: transparent;
  }
  &:hover .${outlinedInputClasses.notchedOutline} {
    border-color: transparent;
  }
  &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} {
    border-color: transparent;
  }
`);

  return (
    <OrdersContainer className="flex-col">

      <Box className="flex-center-y jcsb">

        <Box className="flex order-select w100">

          <Box className="flex-col" sx={{ marginRight: 1 }}>
            <Typography variant='subtitle2' className='label' >Month</Typography>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="text-center"
              value={1}
            // onChange={handleChange}
            >
              <MenuItem value={"1"}><CalendarIcon /> January 2022</MenuItem>
              <MenuItem value={"2"}><CalendarIcon /> February 2022</MenuItem>
              <MenuItem value={"3"}><CalendarIcon /> March 2022</MenuItem>
            </StyledSelect>
          </Box>

          <Box className="flex-col">
            <Typography variant='subtitle2' className='label'>Customer</Typography>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="text-center"
              value={1}
            // onChange={handleChange}
            >
              <MenuItem value={"1"}><UserIcon /> All</MenuItem>
              <MenuItem value={"2"}><UserIcon /> Customer 1</MenuItem>
              <MenuItem value={"3"}><UserIcon /> Customer 2</MenuItem>
            </StyledSelect>
          </Box>

          <Box className="flex-reverse flex1 last-updated">
            <ResetIcon style={{ color: "#3FC2D4", marginTop: 3, marginLeft: 3, cursor: "pointer" }} /> Last updated: 3mins ago
          </Box>

        </Box>

      </Box>
    </OrdersContainer>
  )
}