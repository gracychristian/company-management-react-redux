import { combineReducers } from "@reduxjs/toolkit";
import { companyReducer } from "./company/companyReducer";
import { employeeReducer } from "./employee/employeeReducer";

const rootReducers = combineReducers({
  company: companyReducer,
  employee: employeeReducer,
});

export default rootReducers;
