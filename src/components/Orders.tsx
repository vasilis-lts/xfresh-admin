import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Drawer, MenuItem, Select, Typography } from "@mui/material";
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as ResetIcon } from '../assets/icons/reset.svg';
import CloseIcon from '@mui/icons-material/Close';

import MainTable from "./MainTable";
import Dform from "./DForm";

interface OrdersFormValues {
  CustomerId: string;
  Price: number;
  ArticleCode: string;
  DeliveryDate: Date;
  ArticleName: string;
  Volume: number;
}

export default function Orders({ formOpen, setFormOpen }) {

  const [FormShow, setFormShow] = useState<boolean>(false);
  const [FormElements, setFormElements] = useState<Record<string, any>[]>([]);
  const [InitialValues, setInitialValues] = useState<any>({});

  useEffect(() => {
    if (!FormElements.length) createFormElements();
  }, [FormElements]);

  function createFormElements() {

    let initialValues: OrdersFormValues = {
      CustomerId: "2",
      Price: 50.00,
      ArticleCode: "0",
      DeliveryDate: new Date(),
      ArticleName: "Based on Article Code value",
      Volume: 100
    }

    const formElements = [
      {
        label: "Customer Id",
        name: "CustomerId",
        type: "select",
        required: true,
        options: [
          { key: "SelectCustomer", value: "0", label: "Select" },
          { key: "Customer1", value: "1", label: "Customer 1" },
          { key: "Customer2", value: "2", label: "Customer 2" },
        ]
      },
      {
        label: "Price per box",
        name: "Price",
        type: "text",
        required: true,
        unit: '€'
      },
      // { type: "empty", name: "empty1" },

      {
        label: "Article Code Input",
        name: "ArticleCodeInput",
        required: true,
        type: "select",
        options: [
          { key: "xxxxxxxxxxxxxx", value: "0", label: "xxxxxxxxxxxxxx" },
          { key: "yyyyyyyyyyyyyy", value: "1", label: "yyyyyyyyyyyyyy" },
          { key: "zzzzzzzzzzzzzz", value: "2", label: "zzzzzzzzzzzzzz" },
        ]
      },
      {
        label: "Article Code Output",
        name: "ArticleCodeOutput",
        required: true,
        type: "select",
        options: [
          { key: "xxxxxxxxxxxxxx", value: "0", label: "xxxxxxxxxxxxxx" },
          { key: "yyyyyyyyyyyyyy", value: "1", label: "yyyyyyyyyyyyyy" },
          { key: "zzzzzzzzzzzzzz", value: "2", label: "zzzzzzzzzzzzzz" },
        ]
      },
      {
        label: "Volume",
        name: "Volume",
        type: "text",
        required: true,
        unit: 'kg'
      },
      {
        label: "Delivery Date",
        name: "DeliveryDate",
        type: "datepicker",
        required: true,
      },


    ];

    setFormElements(formElements);
    setInitialValues(initialValues);
    setFormShow(true);
  }

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

            case 'stock_success':
              dotValue = 'success'
              break;
            case 'stock_warning':
              dotValue = 'warning'
              break;
            case 'stock_error':
              dotValue = 'error'
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
          let dotValue = '';
          switch (row.original.GrowerForecast) {

            case 'forecast_success':
              dotValue = 'success'
              break;
            case 'forecast_warning':
              dotValue = 'warning'
              break;
            case 'forecast_error':
              dotValue = 'error'
              break;

            default: dotValue = 'white'
              break;
          }

          return <div className="table-cell"><div className={`${dotValue}-dot dot`} /></div>
        }
      },
      {
        Header: 'Quantity confirmed',
        accessor: 'QuantityConfirmed',
        Cell: ({ row }) => {
          return <div className="table-cell">{row.original.QuantityConfirmed}</div>
        }
      },
      {
        Header: 'Status',
        accessor: 'Status',
        Cell: ({ row }) => {
          return <div className="table-cell">
            <Button color="warning" size="small" variant="contained" style={{ pointerEvents: "none" }} disableElevation>DELAYED</Button>
          </div>
        }
      },
    ],
    [],
  );

  const data = [
    {
      OrderDate: '09/02/2022',
      CustomerName: "Customer Name",
      Volume: "100kg",
      ArticleCode: "XXXXXXXXXXXXXX",
      Price: "1000",
      StockLevel: "stock_error",
      GrowerForecast: "forecast_warning",
      QuantityConfirmed: "x out of 100",
      Status: { StatusText: "Delayed", TimeInHours: "18" }
    },
  ];

  const DrawerForm = styled('div')(({ theme }) => ({
    padding: "40px",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    height: '100%',

    '& .drawer-form-title': {
      display: "flex",
      justifyContent: "space-between"
    },
    '& .drawer-form-content': {
      flex: 1
    },
    '& .form-wrapper': {
      height: "100%"
    },
    '& form': {
      display: "flex",
      flexDirection: "column",
      height: '100%'
    },
    '& .form-inputs-outer': {
      display: "flex",
      flex: 1,
      alignItems: "flex-start"
    },
    '& .form-inputs': {
      marginTop: 30,
      display: "flex",
      flexWrap: "wrap",
      width: '100%'
    },
    '& .form-group': {
      width: '50%',
      maxWidth: '50%',
      marginRight: 0,
      padding: '0 5px',
      marginTop: 10
    },
    '& .form-group .label': {
      marginBottom: 5,
    },
    '& .form-actions button': {
      fontSize: 18,
      padding: "12px 42px",
      fontWeight: 500
    }
  }));

  return (
    <OrdersContainer className="flex-col">
      <Box className="flex-center-y jcsb">
        <Box className="flex order-select w100">

          <Box className="flex-col" sx={{ marginRight: 1 }}>
            <Typography variant='subtitle2' className='label' >Month</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="text-center"
              value={1}
            // onChange={handleChange}
            >
              <MenuItem value={"1"}><CalendarIcon /> January 2022</MenuItem>
              <MenuItem value={"2"}><CalendarIcon /> February 2022</MenuItem>
              <MenuItem value={"3"}><CalendarIcon /> March 2022</MenuItem>
            </Select>
          </Box>

          <Box className="flex-col">
            <Typography variant='subtitle2' className='label'>Customer</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="text-center"
              value={1}
            // onChange={handleChange}
            >
              <MenuItem value={"1"}><UserIcon /> All</MenuItem>
              <MenuItem value={"2"}><UserIcon /> Customer 1</MenuItem>
              <MenuItem value={"3"}><UserIcon /> Customer 2</MenuItem>
            </Select>
          </Box>

          <Box className="flex-reverse flex1 last-updated">
            <ResetIcon style={{ color: "#3FC2D4", marginTop: 3, marginLeft: 3, cursor: "pointer" }} /> Last updated: 3mins ago
          </Box>

        </Box>
      </Box>

      <Box className="flex-center-y" style={{ marginTop: 30 }}>
        <div style={{ fontSize: 16, letterSpacing: 0, marginLeft: 20, marginRight: 5 }} className="bold">Total Orders: 10.889</div>
        <Button color="warning" size="small" variant="contained" style={{ pointerEvents: "none" }} disableElevation sx={{ margin: 1 }}>12 DELAYED</Button>
        <Button color="error" size="small" variant="contained" style={{ pointerEvents: "none" }} disableElevation>9 CANCELLED</Button>
      </Box>

      {/* TABLE */}
      <MainTable data={data} columns={columns} />

      {/* FORM */}
      <Drawer
        anchor={'right'}
        open={formOpen}
        variant="temporary"
        // onClose={() => toggleDrawer(false)}
        onClose={(_, reason) =>
          reason === 'backdropClick' && setFormOpen(false)
        }
      >
        <DrawerForm>
          <Box className="drawer-form-title">
            <Typography variant="h5" className="text-primary-color bold">New Order</Typography>
            <div onClick={() => setFormOpen(false)}>
              <CloseIcon style={{ fontSize: 32, color: "#B0BEC5", cursor: "pointer" }} />
            </div>
          </Box>
          <Box className="drawer-form-content">
            {FormShow &&
              <Dform
                formElements={FormElements}
                initialValues={InitialValues}
              />
            }
          </Box>
        </DrawerForm>
      </Drawer>

    </OrdersContainer>
  )
}