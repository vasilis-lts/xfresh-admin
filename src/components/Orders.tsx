import styled from "@emotion/styled";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

export default function Orders() {

  const OrdersContainer = styled('div')(({ theme }) => ({

    '& .MuiSelect-select': {
      borderColor: "#fff",
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

      <Box className="flex">

        <Box className="flex-col" sx={{ marginRight: 1 }}>
          <Typography variant='subtitle2' className='label' >Pitch map</Typography>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="w100 text-center"
            value={1}
          // onChange={handleChange}
          >
            <MenuItem value={1}>------ Select Pitch ------</MenuItem>
            <MenuItem value={"1"}>01 Spot at the water €5</MenuItem>
            <MenuItem value={"2"}>02 Spot in the corner with lots of privacy €2</MenuItem>
          </StyledSelect>
        </Box>

        <Box className="flex-col">
          <Typography variant='subtitle2' className='label'>Pitch map</Typography>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="text-center"
            value={1}
          // onChange={handleChange}
          >
            <MenuItem value={1}>------ Select Pitch ------</MenuItem>
            <MenuItem value={"1"}>01 Spot at the water €5</MenuItem>
            <MenuItem value={"2"}>02 Spot in the corner with lots of privacy €2</MenuItem>
          </StyledSelect>
        </Box>

      </Box>
    </OrdersContainer>
  )
}