import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";

const Input = ({ label, value, name, formik, type = "text" }) => {
  return (
    <>
      <FormControl fullWidth>
        <TextField
          className="bg-white"
          type={type}
          sx={{ mt: ".5rem" }}
          variant="outlined"
          label={label}
          name={name}
          value={value}
          onBlur={formik?.handleBlur}
          error={formik?.touched[name] && formik?.errors[name]}
          onChange={formik?.handleChange}
        />
        {formik?.touched[name] && formik?.errors[name] && (
          <>
            <FormHelperText sx={{ color: "red" }} className="mb-2">
              {formik?.errors[name]}
            </FormHelperText>
          </>
        )}
      </FormControl>
    </>
  );
};

export default Input;
