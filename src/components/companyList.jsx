import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { removeCompany } from "../redux/company/companyActions";

const CompanyList = () => {
  const companyData = useSelector(
    (state) => state.rootReducers.company.companyList
  );

  let dispatch = useDispatch();

  return (
    <Card className="border text-justify">
      <CardHeader title="Companies" className="border-b bg-gray-700 text-white dark:bg-slate-600" />
      <CardContent className="dark:bg-slate-300">
        {companyData.length > 0 ? (
          companyData.map((data) => (
            <Card key={data.id} className="border mb-5" sx={{ boxShadow: "none" }}>
              <CardHeader
                title={
                  <Link
                    to={`/company/${data?.id}`}
                    state={{ companyDetails: data }}
                    className="px-2 text-white text-lg font-bold"
                  >
                    {data.name}
                  </Link>
                }
                className="border-b bg-gray-700 dark:bg-slate-600"
                sx={{
                  p: ".5rem",
                }}
              />
              <CardContent sx={{ p: "5px 1rem" }}>
                <Typography sx={{ fontWeight: 600 }}>Address :</Typography>
                <Typography className="pb-2">{data.address}</Typography>
                {/* </CardContent>
              <CardContent sx={{ p: "5px 1rem" }}> */}
                <Typography sx={{ fontWeight: 600 }}>Revenue :</Typography>
                <Typography className="pb-2">{data.revenue}</Typography>
                {/* </CardContent>
              <CardContent sx={{ p: "5px 1rem 1rem 1rem" }}> */}
                <Typography sx={{ fontWeight: 600 }}>Phone :</Typography>
                <Typography>{data.phone}</Typography>
              </CardContent>
              <CardActions className="justify-between border-t bg-gray-700 dark:bg-slate-500">
                <Link
                  to={`/company/${data?.id}`}
                  state={{ companyDetails: data }}
                  className="px-2 text-white text-lg font-bold"
                >
                  Company Overview
                </Link>
                <IconButton onClick={() => dispatch(removeCompany(data.id))} sx={{ backgroundColor: "white" }}>
                  <Delete sx={{ color: "red" }} />
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography
            className="flex justify-center"
            variant="h5"
            component="h5"
          >
            No company found!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CompanyList;
