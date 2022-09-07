import { Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Delete } from '@mui/icons-material';
import { removeEmployee } from "../redux/employee/employeeActions";

const CompanyDetails = () => {
  const location = useLocation();
  let companyDetails = useSelector((state) =>
    state.rootReducers.company.companyList.find(
      (i) => i.id === location.state.companyDetails.id
    )
  );
  let employeeData = useSelector(
    (state) => state.rootReducers.employee.employeeList
  );

  let dispatch = useDispatch()

  let [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    let emp = employeeData.filter((i) => i.companyId === companyDetails.id);
    setEmployeeList(emp);
  }, [companyDetails, employeeData]);

  return (
    <Box className="flex flex-col items-center">
      {companyDetails ? (
        <>
          <Card className="border w-9/12 text-justify mb-7">
            <CardHeader
              action={
                <Link
                  to={`/`}
                  className="px-2 text-white text-lg font-bold"
                >
                  <IconButton sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                </Link>
              }
              title={companyDetails.name}
              className="border-b bg-gray-700 text-white dark:bg-slate-600"
              sx={{
                p: ".5rem 1rem .5rem 3rem",
              }}
            > </CardHeader>
            <Box className="flex justify-between">
              <CardContent sx={{ p: "5px 3rem" }}>
                <Typography sx={{ fontWeight: 600 }}>Address :</Typography>
                <Typography>{companyDetails.address}</Typography>
              </CardContent>
              <CardContent sx={{ p: "5px 8rem 5px 3rem" }}>
                <Typography sx={{ fontWeight: 600 }}>
                  Total Employees :
                </Typography>
                <Typography>{employeeList.length}</Typography>
              </CardContent>
            </Box>

            <CardContent sx={{ p: "5px 3rem" }}>
              <Typography sx={{ fontWeight: 600 }}>Revenue :</Typography>
              <Typography>{companyDetails.revenue}</Typography>
            </CardContent>
            <CardContent sx={{ p: "5px 3rem 1rem 3rem" }}>
              <Typography sx={{ fontWeight: 600 }}>Phone :</Typography>
              <Typography>{companyDetails.phone}</Typography>
            </CardContent>
            <CardActions className="border-t bg-gray-700 dark:bg-slate-500"></CardActions>
          </Card>
          <Card className="border w-9/12 text-justify">
            <CardHeader title="Employees" className="border-b bg-gray-700 text-white dark:bg-slate-600" sx={{ pl: "3rem" }} />
            <CardContent className="flex flex-col items-center">
              {employeeList.length > 0 ? (
                employeeList.map((emp) => {
                  return (
                    <Card className="border w-3/4 mt-3" key={emp.id}>
                      <CardHeader action={
                        <IconButton onClick={() => dispatch(removeEmployee(emp.id))}>
                          <Delete sx={{ color: "red" }} />
                        </IconButton>}
                        title={emp.name}
                        className="border-b bg-gray-700 text-white dark:bg-slate-600"
                        sx={{
                          p: ".5rem",
                        }}
                      />
                      <CardContent sx={{ p: "2rem 1rem" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          Address :
                        </Typography>
                        <Typography>{emp.address}</Typography>
                      </CardContent>
                      <CardActions className="border-t bg-gray-700 dark:bg-slate-500">
                      </CardActions>
                    </Card>
                  );
                })
              ) : (
                <Typography
                  className="flex justify-center"
                  variant="h5"
                  component="h5"
                >
                  No employees for this company
                </Typography>
              )}
            </CardContent>
          </Card>
        </>
      ) : (
        <Typography className="flex justify-center" variant="h5" component="h5">
          Select company
          <Button
            component={Link}
            to="/home"
            variant="contained"
            color="primary"
            sx={{ mt: "1rem" }}
          >
            Back
          </Button>
        </Typography>
      )}
    </Box>
  );
};

export default CompanyDetails;
