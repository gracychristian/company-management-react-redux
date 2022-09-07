import React, { useEffect, useState } from "react";
import Input from "./common/input";
import Select from "./common/select";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MultiLine from "./common/multiLine";
import { useDispatch, useSelector } from "react-redux";
import { addEmployees } from "../redux/employee/employeeActions";

const AddEmployee = () => {
  let [companies, setCompanies] = useState([]);

  const companyData = useSelector(
    (state) => state.rootReducers.company.companyList
  );
  let dispatch = useDispatch();

  const getCompanies = () => {
    let list = [];
    setCompanies(list);
    for (let i = 0; i < companyData.length; i++) {
      list.push({ label: companyData[i].name, value: companyData[i].id });
    }
    setCompanies(list);
  };
  useEffect(() => {
    if (companyData) getCompanies();
  }, [companyData]);

  const validate = Yup.object({
    name: Yup.string().required("Name is Required"),
    address: Yup.string().required("Address is Required"),
    companyId: Yup.string().required("Company is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        companyId: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { setErrors, resetForm }) => {
        resetForm({});
        setErrors({});
      }}
    >
      {companyData &&
        companyData.length > 0 &&
        ((formik) => (
          <Card className="border mt-5">
            <CardHeader
              title="Create new Person"
              className="border-b bg-gray-700 text-white dark:bg-slate-600"
            />
            <CardContent className="text-justify text-justify dark:bg-slate-300">
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
                <Select
                  options={companies}
                  label="Select Employer"
                  name="companyId"
                  value={formik.values.companyId}
                  formik={formik}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="w-1/2"
                  sx={{ mt: "1rem" }}
                  onClick={() => dispatch(addEmployees(formik.values))}
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Save
                </Button>
              </Form>
            </CardContent>
          </Card>
        ))}
    </Formik>
  );
};

export default AddEmployee;
