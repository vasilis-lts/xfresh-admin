import React from "react";
import styled from "@emotion/styled";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as ResetIcon } from '../assets/icons/reset.svg';
import MainTable from "./MainTable";

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

  const columns = React.useMemo(
    () => [
      // {
      //   // Make an expander cell
      //   Header: () => null, // No header
      //   id: 'expander', // It needs an ID
      //   Cell: ({ row }) => (
      //     // Use Cell to render an expander for each row.
      //     // We can use the getToggleRowExpandedProps prop-getter
      //     // to build the expander.
      //     <span {...row.getToggleRowExpandedProps()}>
      //       {row.isExpanded ? <ChevronDownIcon w={8} h={8} color="green.500" /> : <ChevronRightIcon w={8} h={8} />}
      //     </span>
      //   ),
      //   width: 50,
      //   // We can override the cell renderer with a SubCell to be used with an expanded row
      //   SubCell: () => null // No expander on an expanded row
      // },
      {
        Header: 'Order date',
        accessor: 'OrderDate',
        // width: 330,
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.OrderDate}</div>
        }
      },
      {
        Header: 'Customer name',
        accessor: 'CustomerName',
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.CustomerName}</div>
        }
      },
      {
        Header: 'Volume',
        accessor: 'Volume',
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.Volume}</div>
        }
      },
      {
        Header: 'Article code',
        accessor: 'ArticleCode',
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.ArticleCode}</div>
        }
      },
      {
        Header: 'Price',
        accessor: 'Price',
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.Price} €</div>
        }
      },

      {
        Header: 'Stock level',
        accessor: 'StockLevel',
        Cell: ({ row }) => {

          let dotValue = '';
          switch (row.original.StockLevel) {
            case 'stock_green':
              dotValue = 'success'
              break;

            default: dotValue = 'white'
              break;
          }

          return <div className="table-cell"><div className={`${dotValue}-dot dot`} /></div>
        }
      },
      {
        Header: 'Grower forecast',
        accessor: 'GrowerForecast',
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.GrowerForecast}</div>
        }
      },

    ],
    [],
  )

  const data = [
    { OrderDate: '09/02/2022', CustomerName: "Customer Name", Volume: "100kg", ArticleCode: "XXXXXXXXXXXXXX", Price: "1000", StockLevel: "stock_green", },
  ]


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

      <Box className="flex-center-y" style={{ marginTop: 30 }}>
        <div style={{ fontSize: 16, letterSpacing: 0, marginLeft: 20, marginRight: 5 }} className="bold">Total Orders: 10.889</div>
        <Button color="warning" size="small" variant="contained" sx={{ margin: 1 }}>12 DELAYED</Button>
        <Button color="error" size="small" variant="contained">9 CANCELLED</Button>
      </Box>

      <MainTable data={data} columns={columns} />

    </OrdersContainer>
  )
}