import { useFormik } from 'formik';
import { TextField, Button, Select, MenuItem, Box } from '@mui/material';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import styled from '@emotion/styled';


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

export default function Dform(props) {

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

  const FormContainer = styled('div')(({ theme }) => ({
    '& .form-group': {
      position: "relative"
    },
    '& .form-group-unit': {
      position: "absolute",
      right: 20,
      top: "54%",
      fontSize: 16,
      fontWeight: 300,
      color: "#B0BEC5"
    },
    '& .label': {
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 500,
      color: "#37474F",
      letterSpacing: 0
    },
  }))

  const formik = useFormik({
    initialValues: props.initialValues,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

  });


  return (
    <FormContainer className='form-wrapper'>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <form onSubmit={formik.handleSubmit}>

          <div className="form-inputs-outer">

            <div className="form-inputs">
              {/* <Box className="flex-col form-group">
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
                <span className='form-group-unit'>€</span>
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
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={formik.values.deliveryDate}
                  onChange={newValue => formik.setFieldValue("deliveryDate", newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>

              <Box className="flex-col form-group">
                <Typography variant='subtitle2' className='label' >Article name</Typography>
                <TextField
                  fullWidth
                  id="articleName"
                  name="articleName"
                  type="text"
                  disabled
                  value='Value based on Article code'
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
                <span className='form-group-unit'>kg</span>
              </Box> */}

              {props.formElements.map(el => {
                if (el) {
                  if (
                    el.type === "text" ||
                    el.type === "email" ||
                    el.type === "number" ||
                    el.type === "password" ||
                    el.type === "tel"
                  ) {
                    return (
                      <Box key={el.name} className="flex-col form-group">
                        <label htmlFor={el.name} className='label' >{el.label}</label>
                        <TextField
                          fullWidth
                          id={el.id}
                          name={el.name}
                          type={el.type}
                          value={formik.values[el.name]}
                          disabled={el.disabled ? true : false}
                          onChange={formik.handleChange}
                        // error={formik.touched.password && Boolean(formik.errors.password)}
                        // helperText={formik.touched.password && formik.errors.password}
                        />
                        {el.unit && <span className='form-group-unit'>{el.unit}</span>}
                      </Box>
                    )
                  }
                  if (el.type === "select") {
                    return (
                      <Box key={el.name} className="flex-col form-group">
                        <label htmlFor={el.name} className='label' >{el.label}</label>
                        <Select
                          id={el.id}
                          name={el.name}
                          className="text-center"
                          value={formik.values[el.name]}
                          onChange={formik.handleChange}
                        >
                          {el.options.map(opt => {
                            return <MenuItem key={opt.key} value={opt.value}>{opt.label}</MenuItem>
                          })}

                        </Select>
                      </Box>
                    );
                  }
                  if (el.type === "datepicker") {
                    return (
                      <Box key={el.id} className="flex-col form-group">
                        <label className='label' >{el.label}</label>
                        <DesktopDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={formik.values[el.name]}
                          onChange={newValue => formik.setFieldValue(el.name, newValue)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Box>
                    )
                  }
                  if (el.type === "empty") {
                    return <Box className="flex-col form-group" />
                  }
                }
                return <p key="no elements">No form element provided</p>;
              })}

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
      </LocalizationProvider>
    </FormContainer>
  );
};