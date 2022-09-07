import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "./employeeType";

export const addEmployees = (payload) => {
  return {
    type: ADD_EMPLOYEE,
    payload,
  };
};

export const removeEmployee = (payload) => {
  return {
    type: REMOVE_EMPLOYEE,
    payload,
  };
};