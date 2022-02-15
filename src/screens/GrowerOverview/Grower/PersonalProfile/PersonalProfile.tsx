import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import * as Yup from 'yup';
import { Field, FieldArray, Form, Formik, useFormik } from 'formik';
import { ReactComponent as UploadIcon } from '../../../../assets/icons/upload.svg';
import "./_personalprofile.scss";
import Thumb from "../../../../components/Thumb";

export default function PersonalProfile() {

  useEffect(() => {
    // createForm();
  }, []);

  return (
    <div id="personalProfileForm">
      <div className='form-wrapper'>
        <Formik
          initialValues={{
            fullname: "",
            tradename: "",
            street: "",
            housenumber: "",
            zipcode: "",
            city: "",
            country: "",
            totalAreaInCultivation: "",
            mailinglist: ["test", "test3", "test4"],
            incoterms: "",
            currency: "",
            logo: ""
          }}
          validationSchema={
            Yup.object({
              fullname: Yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
              tradename: Yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
              logo: Yup.mixed().required(),
              incoterms: Yup.string().required(),
              currency: Yup.string().required(),
            })
          }
          onSubmit={values => console.log(values)}
          // validationSchema = validationSchema
          // onSubmit={values =>
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //   }, 500)
          // }
          render={({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>

              <div className="form-inputs-outer">

                <div className="form-inputs">

                  <Box className="flex-col form-column">
                    <Box className="flex-col form-group">
                      <label htmlFor={"fullname"} className='label' >Full Name*</label>
                      <TextField
                        fullWidth
                        id={"fullname"}
                        name={"fullname"}
                        type={"text"}
                        value={values["fullname"]}
                        onChange={handleChange}
                        error={touched["fullname"] && Boolean(errors["fullname"])}
                        helperText={touched["fullname"] && errors["fullname"]}
                      />
                    </Box>
                    <Box className="flex-col form-group">
                      <label htmlFor={"tradename"} className='label' >Trade Name*</label>
                      <TextField
                        fullWidth
                        id={"tradename"}
                        name={"tradename"}
                        type={"text"}
                        value={values.tradename}
                        onChange={handleChange}
                        error={touched["tradename"] && Boolean(errors["tradename"])}
                        helperText={touched["tradename"] && errors["tradename"]}
                      />
                    </Box>

                    <FieldArray
                      name="mailinglist"
                      render={arrayHelpers => (
                        <div>
                          {values.mailinglist && values.mailinglist.length > 0 ? (
                            values.mailinglist.map((friend, index) => (
                              <div key={index}>
                                <Field name={`mailinglist.${index}`} />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  -
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                >
                                  +
                                </button>
                              </div>
                            ))
                          ) : (
                            <button type="button" onClick={() => arrayHelpers.push('')}>
                              {/* show this when user has removed all friends from the list */}
                              Add a friend
                            </button>
                          )}

                        </div>
                      )}
                    />
                  </Box>

                  <Box className="flex-col form-column">
                    <Box className="flex-col form-group">
                      <label htmlFor={"street"} className='label' >Street</label>
                      <TextField
                        fullWidth
                        id={"street"}
                        name={"street"}
                        type={"text"}
                        value={values.street}
                        onChange={handleChange}
                        error={touched["street"] && Boolean(errors["street"])}
                        helperText={touched["street"] && errors["street"]}
                      />
                    </Box>
                    <Box className="flex-col form-group">
                      <label htmlFor={"housenumber"} className='label' >House Number</label>
                      <TextField
                        fullWidth
                        id={"housenumber"}
                        name={"housenumber"}
                        type={"text"}
                        value={values.housenumber}
                        onChange={handleChange}
                        error={touched["housenumber"] && Boolean(errors["housenumber"])}
                        helperText={touched["housenumber"] && errors["housenumber"]}
                      />
                    </Box>
                    <Box className="flex-col form-group">
                      <label htmlFor={"zipcode"} className='label' >Zipcode</label>
                      <TextField
                        fullWidth
                        id={"zipcode"}
                        name={"zipcode"}
                        type={"text"}
                        value={values.zipcode}
                        onChange={handleChange}
                        error={touched["zipcode"] && Boolean(errors["zipcode"])}
                        helperText={touched["zipcode"] && errors["zipcode"]}
                      />
                    </Box>
                    <Box className="flex-col form-group">
                      <label htmlFor={"city"} className='label' >City</label>
                      <TextField
                        fullWidth
                        id={"city"}
                        name={"city"}
                        type={"text"}
                        value={values.city}
                        onChange={handleChange}
                        error={touched["city"] && Boolean(errors["city"])}
                        helperText={touched["city"] && errors["city"]}
                      />
                    </Box>
                    <Box className="flex-col form-group">
                      <label htmlFor={"country"} className='label' >Country</label>
                      <TextField
                        fullWidth
                        id={"country"}
                        name={"country"}
                        type={"text"}
                        value={values.country}
                        onChange={handleChange}
                        error={touched["country"] && Boolean(errors["country"])}
                        helperText={touched["country"] && errors["country"]}
                      />
                    </Box>
                  </Box>

                  <Box className="flex-col form-column">

                    <Box className="flex-col form-group">
                      <label htmlFor={"country"} className='label' >Total area in cultivation</label>
                      <TextField
                        fullWidth
                        id={"totalAreaInCultivation"}
                        name={"totalAreaInCultivation"}
                        type={"text"}
                        value={values.totalAreaInCultivation}
                        onChange={handleChange}
                        error={touched["totalAreaInCultivation"] && Boolean(errors["totalAreaInCultivation"])}
                        helperText={touched["totalAreaInCultivation"] && errors["totalAreaInCultivation"]}
                      />
                    </Box>

                    <Box className="flex-col form-group">
                      <label htmlFor={"incoterms"} className='label' >Incoterms*</label>
                      <TextField
                        fullWidth
                        id={"incoterms"}
                        name={"incoterms"}
                        type={"text"}
                        value={values.incoterms}
                        onChange={handleChange}
                        error={touched["incoterms"] && Boolean(errors["incoterms"])}
                        helperText={touched["incoterms"] && errors["incoterms"]}
                      />
                    </Box>

                    <Box className="flex-col form-group">
                      <label htmlFor={"currency"} className='label' >Currency*</label>
                      <TextField
                        fullWidth
                        id={"currency"}
                        name={"currency"}
                        type={"text"}
                        value={values.currency}
                        onChange={handleChange}
                        error={touched["currency"] && Boolean(errors["currency"])}
                        helperText={touched["currency"] && errors["currency"]}
                      />
                    </Box>

                    <Box className="flex-col form-group form-file-input">
                      <label htmlFor={"logo"} className='label' >Logo*</label>
                      <input id="logo" name="logo" type="file"
                        accept="image/*"
                        onChange={(event) => {
                          if (event?.currentTarget?.files?.length) {
                            setFieldValue("logo", event.currentTarget.files[0] ? event.currentTarget.files[0] : "");
                          }
                        }} className="form-control" />
                      <Thumb file={values.logo} />
                      {errors.logo && touched["logo"] ? <p className="text-error">Logo is required</p> : ""}
                    </Box>

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
                  id={"ppFormButton"}
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
