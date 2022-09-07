import React, { useState } from "react";
import Input from "./common/input";
import { useDispatch } from "react-redux";
import { addCompany } from "../redux/company/companyActions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MultiLine from "./common/multiLine";
import { Button, Card, CardContent, CardHeader } from "@mui/material";

const AddCompany = () => {
  const dispatch = useDispatch();

  const validate = Yup.object({
    name: Yup.string().required("Name is Required"),
    address: Yup.string().required("Address is Required"),
    revenue: Yup.string().required("Revenue is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        revenue: "",
        phone: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { setErrors, resetForm }) => {
        resetForm({});
        setErrors({});
      }}
    >
      {(formik) => (
        <Card className="border">
          <CardHeader
            title="Create new Company"
            className="border-b bg-gray-700 text-white dark:bg-slate-600"
          />
          <CardContent className="text-justify dark:bg-slate-300">
            <Form>
              <Input
                name="name"
                label="Name"
                value={formik.values.name}
                formik={formik}
              />
              <MultiLine
                label="Address"
                name="address"
                value={formik.values.address}
                formik={formik}
              />
              <Input
                type="number"
                name="revenue"
                label="Revenue"
                value={formik.values.revenue}
                formik={formik}
              />
              <Input
                type="number"
                name="phone"
                label="Phone"
                value={formik.values.phone}
                formik={formik}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className="w-1/2"
                sx={{ mt: "1rem" }}
                onClick={() => dispatch(addCompany(formik.values))}
                disabled={!formik.isValid || !formik.dirty}
              >
                Save
              </Button>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default AddCompany;
