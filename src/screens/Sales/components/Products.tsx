import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Dform from "../../../components/DForm";
import { Box, Button, Drawer, MenuItem, Select, Typography } from "@mui/material";
import { ReactComponent as CalendarIcon } from '../../../assets/icons/calendar.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as ResetIcon } from '../../../assets/icons/reset.svg';
import CloseIcon from '@mui/icons-material/Close';

interface ProductsFormValues {
  ProductName: string;
  ProductCategory: string;
  Description: string;
}

export default function Products({ formOpen, setFormOpen }) {

  const [FormShow, setFormShow] = useState<boolean>(false);
  const [FormElements, setFormElements] = useState<Record<string, any>[]>([]);
  const [InitialValues, setInitialValues] = useState<any>({});

  useEffect(() => {
    if (!FormElements.length) createFormElements();
  }, [FormElements]);

  function createFormElements() {

    let initialValues: ProductsFormValues = {
      ProductName: "Product 1",
      Description: "",
      ProductCategory: "0"
    }

    const formElements = [
      {
        label: "Article Code",
        name: "ArticleCode",
        type: "text",
        required: true
      },
      {
        label: "Product Name",
        name: "ProductName",
        type: "text",
        required: true
      },
      {
        label: "Product Category",
        name: "ProductCategory",
        type: "select",
        options: [
          { key: "SelectCategory", value: "0", label: "Select" },
          { key: "Category1", value: "1", label: "Category 1" },
          { key: "Category2", value: "2", label: "Category 2" },
        ],
        required: true
      },
      {
        label: "Box Content",
        name: "BoxContent",
        type: "text",
        required: true
      },
      {
        label: "Presentation",
        name: "Presentation",
        type: "text",
        required: true
      },
      {
        label: "Packaging Type",
        name: "PackagingType",
        type: "text",
        required: true
      },
      {
        label: "Packaging Detail",
        name: "PackagingDetail",
        type: "text",
        required: true
      },
      {
        label: "MRL Level",
        name: "MRLLevel",
        type: "text",
        unit: '%',
        required: true
      },
      {
        label: "Max AI",
        name: "MaxAI",
        type: "text",
        required: true
      },
      {
        label: "Product Specifications",
        name: "ProductSpecifications",
        type: "file",
        required: true
      },
      {
        label: "Description",
        name: "Description",
        type: "textarea",
        required: true,
        // value: initialValues.Description
      }
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
            <Typography variant="h5" className="text-primary-color bold">New Product</Typography>
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