import React from "react";
import CompanyList from "./companyList";
import AddCompany from "./addCompany";
import AddEmployee from "./addEmployee";
import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";

const Companies = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <CompanyList />
      </Grid>
      <Grid item xs={4}>
        <AddCompany />
        <AddEmployee />
      </Grid>
    </Grid>
  );
};

export default Companies;
