import { useFormik } from 'formik';
import { TextField, Button, Select, MenuItem, Box, TextareaAutosize } from '@mui/material';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import "../styles/_form.scss"
import * as Yup from 'yup';

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

  const formik = useFormik({
    initialValues: props.initialValues,
    validationSchema: Yup.object({
      Volume: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='form-wrapper'>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <form onSubmit={formik.handleSubmit}>

          <div className="form-inputs-outer">

            <div className="form-inputs">

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
                        <label htmlFor={el.name} className='label' >{el.label}{el.required && '*'}</label>
                        <TextField
                          fullWidth
                          id={el.name}
                          name={el.name}
                          type={el.type}
                          value={formik.values[el.name]}
                          disabled={el.disabled ? true : false}
                          onChange={formik.handleChange}
                          error={formik.touched[el.name] && Boolean(formik.errors[el.name])}
                          helperText={formik.touched[el.name] && formik.errors[el.name]}
                        />
                        {el.unit && <span className='form-group-unit'>{el.unit}</span>}
                      </Box>
                    )
                  }
                  if (el.type === "select") {
                    return (
                      <Box key={el.name} className="flex-col form-group">
                        <label htmlFor={el.name} className='label' >{el.label}{el.required && '*'}</label>
                        <Select
                          id={el.name}
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
                  if (el.type === "textarea") {
                    return (
                      <Box key={el.name} className="flex-col form-group">
                        <label htmlFor={el.name} className='label' >{el.label}{el.required && '*'}</label>
                        <TextareaAutosize
                          aria-label={el.name}
                          name={el.name}
                          id={el.name}
                          minRows={3}

                          placeholder={el.placeholder ? el.placeholder : ""}
                          value={formik.values[el.name]}
                          onChange={formik.handleChange}
                        />
                      </Box>
                    )
                  }
                  if (el.type === "datepicker") {
                    return (
                      <Box key={el.name} className="flex-col form-group">
                        <label className='label' >{el.label}{el.required && '*'}</label>
                        <DesktopDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={formik.values[el.name]}
                          onChange={newValue => formik.setFieldValue(el.name, newValue)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Box>
                    )
                  }
                  if (el.type === "file") {
                    return (
                      <Box key={el.name} className="flex-col form-group form-file-input">
                        <label htmlFor={el.name} className='label' >{el.label}{el.required && '*'}</label>
                        <Button
                          variant="contained"
                          component="label"
                          disableElevation
                        >
                          Upload File
                          <input
                            type="file"
                            hidden
                          />
                        </Button>
                      </Box>
                    )
                  }
                  if (el.type === "empty") {
                    return <Box key={el.name} className="flex-col form-group" />
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
    </div>
  );
};