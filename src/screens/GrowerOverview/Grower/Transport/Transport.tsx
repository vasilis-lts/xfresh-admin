import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect } from "react";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { ReactComponent as UploadIcon } from '../../../../assets/icons/upload.svg';
import "../PersonalProfile/_personalprofile.scss"

export default function Transport() {

  useEffect(() => {
    // createForm();
  }, []);

  return (
    <div id="personalProfileForm">
      <div className='form-wrapper'>
        <Formik
          initialValues={{
            shippingMethodAir: true,
            shippingMethodTruck: false,
            shippingMethodSea: false,
            availableDaysMonday: true,
            availableDaysTuesday: false,
            availableDaysWednesday: true,
            availableDaysThursday: true,
            availableDaysFriday: true,
            availableDaysSaturday: true,
            availableDaysSunday: false,
          }}
          // validationSchema={
          //   Yup.object({
          //     fullname: Yup.string()
          //       .max(50, 'Too Long!')
          //       .required('Required'),

          //   })
          // }
          onSubmit={values => console.log(values)}

          render={({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>

              <div className="form-inputs-outer">
                <div className="form-inputs">

                  <Box className="flex-col form-column">
                    <label className='label bold' >Shipping method</label>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={values.shippingMethodAir}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('shippingMethodAir', !values.shippingMethodAir) }}
                        label="Air" />
                      <FormControlLabel
                        control={<Checkbox checked={values.shippingMethodSea} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('shippingMethodSea', !values.shippingMethodSea) }}
                        label="Sea" />
                      <FormControlLabel
                        control={<Checkbox checked={values.shippingMethodTruck} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('shippingMethodTruck', !values.shippingMethodTruck) }}
                        label="Truck" />
                    </FormGroup>
                  </Box>

                  <Box className="flex-col form-column">
                    <label className='label bold' >Available days</label>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysMonday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysMonday', !values.availableDaysMonday) }}
                        label="Monday" />
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysTuesday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysTuesday', !values.availableDaysTuesday) }}
                        label="Tuesday" />
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysWednesday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysWednesday', !values.availableDaysWednesday) }}
                        label="Wednesday" />
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysThursday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysThursday', !values.availableDaysThursday) }}
                        label="Thursday" />
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysFriday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysFriday', !values.availableDaysFriday) }}
                        label="Friday" />
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysSaturday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysSaturday', !values.availableDaysSaturday) }}
                        label="Saturday" />
                      <FormControlLabel
                        control={<Checkbox checked={values.availableDaysSunday} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                        onChange={(event) => { setFieldValue('availableDaysSunday', !values.availableDaysSunday) }}
                        label="Sunday" />
                    </FormGroup>
                  </Box>

                </div>
              </div>
              <div className="form-actions flex-reverse">
                <Button
                  color="success"
                  variant="contained"
                  type="submit"
                  size="large"
                  disableElevation
                  style={{ marginLeft: 5 }}
                  id={"trFormButton"}
                >
                  <UploadIcon style={{ color: "white", marginRight: 3, fontSize: 18 }} />
                  Save
                </Button>

              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
}
