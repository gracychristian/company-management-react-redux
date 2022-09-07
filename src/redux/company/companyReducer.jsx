import { ADD_COMPANY, REMOVE_COMPANY } from "./companyType";

const initialState = {
  companyList: [],
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY: {
      return {
        ...state,
        companyList: [
          ...state.companyList,
          {
            ...action.payload,
            id: state.companyList.length + 1,
          },
        ],
      };
    }
    case REMOVE_COMPANY: {
      return {
        ...state,
        companyList: state.companyList.filter((el) => { return el.id !== action.payload })
      };
    }
    default:
      return state;
  }
};
