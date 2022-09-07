import { ADD_COMPANY, REMOVE_COMPANY } from "./companyType";

export const addCompany = (payload) => {
  return {
    type: ADD_COMPANY,
    payload,
  };
};
export const removeCompany = (payload) => {
  return {
    type: REMOVE_COMPANY,
    payload,
  };
};
