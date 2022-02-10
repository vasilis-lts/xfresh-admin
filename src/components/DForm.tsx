import { useFormik } from 'formik';
import { TextField, Button, Select, MenuItem, Box, Typography } from '@mui/material';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';


// import styled from '@emotion/styled';
// import { outlinedInputClasses } from "@mui/material/OutlinedInput";

// import * as yup from 'yup';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

export default function Dform() {

  //   const StyledSelect = styled(Select)(`
  //   & .${outlinedInputClasses.notchedOutline} {
  //     border-color: transparent;
  //   }
  //   &:hover .${outlinedInputClasses.notchedOutline} {
  //     border-color: transparent;
  //   }
  //   &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} {
  //     border-color: transparent;
  //   }
  // `);

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
      deliveryDate: new Date(),
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

  });

  return (
    <div className='form-wrapper'>
      <form onSubmit={formik.handleSubmit}>

        <div className="form-inputs-outer">

          <div className="form-inputs">
            <Box className="flex-col form-group">
              <Typography variant='subtitle2' className='label' >Customer</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="text-center"
                value={1}
              // onChange={handleChange}
              >
                <MenuItem value={"1"}>Select</MenuItem>
                <MenuItem value={"2"}>Customer 1</MenuItem>
                <MenuItem value={"3"}>Customer 2</MenuItem>
              </Select>
            </Box>

            <Box className="flex-col form-group">
              <Typography variant='subtitle2' className='label' >Order price (customer)</Typography>
              <TextField
                fullWidth
                id="price"
                name="price"
                type="text"
                // value={formik.values.password}
                onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
              />
            </Box>

            <Box className="flex-col form-group">
              <Typography variant='subtitle2' className='label' >Article code</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="text-center"
                value={1}
              // onChange={handleChange}
              >
                <MenuItem value={"1"}>XXXXXXXXXXXXXX</MenuItem>
              </Select>
            </Box>

            <Box className="flex-col form-group">
              <Typography variant='subtitle2' className='label' >Delivery Date</Typography>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={formik.values.deliveryDate}
                  onChange={newValue => formik.setFieldValue("deliveryDate", newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>

            <Box className="flex-col form-group">
              <Typography variant='subtitle2' className='label' >Article name</Typography>
              <TextField
                fullWidth
                id="articleName"
                name="articleName"
                type="text"
                disabled
                placeholder='Value based on Article code'
                // value={formik.values.password}
                onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
              />
            </Box>

            <Box className="flex-col form-group"></Box>

            <Box className="flex-col form-group">
              <Typography variant='subtitle2' className='label' >Volume</Typography>
              <TextField
                fullWidth
                id="volume"
                name="volume"
                type="text"
                value={"100"}
                onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
              />
            </Box>


          </div>
        </div>
        <div className="form-actions flex-reverse">
          <Button color="success" variant="contained" type="submit" size="large" disableElevation style={{ marginLeft: 5 }}>
            <UploadIcon style={{ color: "white", marginRight: 3, fontSize: 18 }} />
            Save
          </Button>
          <Button color="primary" variant="outlined" type="button" size="large">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};