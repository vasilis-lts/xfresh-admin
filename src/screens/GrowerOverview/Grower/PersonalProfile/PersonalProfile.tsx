import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ReactComponent as UploadIcon } from '../../../../assets/icons/upload.svg';
import "./_personalprofile.scss";
import Thumb from "../../../../components/Thumb";

export default function PersonalProfile() {

  useEffect(() => {
    // createForm();
  }, []);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      tradename: "",
      street: "",
      housenumber: "",
      zipcode: "",
      city: "",
      country: "",
      totalAreaInCultivation: "",
      mailingList: [],
      incoterms: "",
      currency: "",
      logo: ""
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
      tradename: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
      logo: Yup.mixed().required(),
      incoterms: Yup.string().required(),
      currency: Yup.string().required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnChange: true
  });



  return (
    <div id="personalProfileForm">
      <div className='form-wrapper'>
        <form onSubmit={formik.handleSubmit}>

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
                    value={formik.values["fullname"]}
                    onChange={formik.handleChange}
                    error={formik.touched["fullname"] && Boolean(formik.errors["fullname"])}
                    helperText={formik.touched["fullname"] && formik.errors["fullname"]}
                  />
                </Box>
                <Box className="flex-col form-group">
                  <label htmlFor={"tradename"} className='label' >Trade Name*</label>
                  <TextField
                    fullWidth
                    id={"tradename"}
                    name={"tradename"}
                    type={"text"}
                    value={formik.values.tradename}
                    onChange={formik.handleChange}
                    error={formik.touched["tradename"] && Boolean(formik.errors["tradename"])}
                    helperText={formik.touched["tradename"] && formik.errors["tradename"]}
                  />
                </Box>
              </Box>

              <Box className="flex-col form-column">
                <Box className="flex-col form-group">
                  <label htmlFor={"street"} className='label' >Street</label>
                  <TextField
                    fullWidth
                    id={"street"}
                    name={"street"}
                    type={"text"}
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    error={formik.touched["street"] && Boolean(formik.errors["street"])}
                    helperText={formik.touched["street"] && formik.errors["street"]}
                  />
                </Box>
                <Box className="flex-col form-group">
                  <label htmlFor={"housenumber"} className='label' >House Number</label>
                  <TextField
                    fullWidth
                    id={"housenumber"}
                    name={"housenumber"}
                    type={"text"}
                    value={formik.values.housenumber}
                    onChange={formik.handleChange}
                    error={formik.touched["housenumber"] && Boolean(formik.errors["housenumber"])}
                    helperText={formik.touched["housenumber"] && formik.errors["housenumber"]}
                  />
                </Box>
                <Box className="flex-col form-group">
                  <label htmlFor={"zipcode"} className='label' >Zipcode</label>
                  <TextField
                    fullWidth
                    id={"zipcode"}
                    name={"zipcode"}
                    type={"text"}
                    value={formik.values.zipcode}
                    onChange={formik.handleChange}
                    error={formik.touched["zipcode"] && Boolean(formik.errors["zipcode"])}
                    helperText={formik.touched["zipcode"] && formik.errors["zipcode"]}
                  />
                </Box>
                <Box className="flex-col form-group">
                  <label htmlFor={"city"} className='label' >City</label>
                  <TextField
                    fullWidth
                    id={"city"}
                    name={"city"}
                    type={"text"}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched["city"] && Boolean(formik.errors["city"])}
                    helperText={formik.touched["city"] && formik.errors["city"]}
                  />
                </Box>
                <Box className="flex-col form-group">
                  <label htmlFor={"country"} className='label' >Country</label>
                  <TextField
                    fullWidth
                    id={"country"}
                    name={"country"}
                    type={"text"}
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={formik.touched["country"] && Boolean(formik.errors["country"])}
                    helperText={formik.touched["country"] && formik.errors["country"]}
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
                    value={formik.values.totalAreaInCultivation}
                    onChange={formik.handleChange}
                    error={formik.touched["totalAreaInCultivation"] && Boolean(formik.errors["totalAreaInCultivation"])}
                    helperText={formik.touched["totalAreaInCultivation"] && formik.errors["totalAreaInCultivation"]}
                  />
                </Box>

                <Box className="flex-col form-group">
                  <label htmlFor={"incoterms"} className='label' >Incoterms*</label>
                  <TextField
                    fullWidth
                    id={"incoterms"}
                    name={"incoterms"}
                    type={"text"}
                    value={formik.values.incoterms}
                    onChange={formik.handleChange}
                    error={formik.touched["incoterms"] && Boolean(formik.errors["incoterms"])}
                    helperText={formik.touched["incoterms"] && formik.errors["incoterms"]}
                  />
                </Box>

                <Box className="flex-col form-group">
                  <label htmlFor={"currency"} className='label' >Currency*</label>
                  <TextField
                    fullWidth
                    id={"currency"}
                    name={"currency"}
                    type={"text"}
                    value={formik.values.currency}
                    onChange={formik.handleChange}
                    error={formik.touched["currency"] && Boolean(formik.errors["currency"])}
                    helperText={formik.touched["currency"] && formik.errors["currency"]}
                  />
                </Box>

                <Box className="flex-col form-group form-file-input">
                  <label htmlFor={"logo"} className='label' >Logo*</label>
                  <input id="logo" name="logo" type="file"
                    accept="image/*"
                    onChange={(event) => {
                      if (event?.currentTarget?.files?.length) {
                        formik.setFieldValue("logo", event.currentTarget.files[0] ? event.currentTarget.files[0] : "");
                      }
                    }} className="form-control" />
                  <Thumb file={formik.values.logo} />
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
        </form>
      </div>
    </div>
  )
}
