import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "./employeeType";

const initialState = {
  employeeList: [],
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      return {
        ...state,
        employeeList: [
          ...state.employeeList,
          {
            ...action.payload,
            id: state.employeeList.length + 1,
          },
        ],
      };
    }
    case REMOVE_EMPLOYEE: {
      return {
        ...state,
        employeeList: state.employeeList.filter((el) => { return el.id !== action.payload })
      };
    }

    default:
      return state;
  }
};
