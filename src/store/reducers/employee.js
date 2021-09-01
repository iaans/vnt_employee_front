import { updateObject } from "../../helpers/mix";
import { SET_EMPLOYEES, SUBMIT_EMPLOYEE_SUCCESS } from "../actionTypes";

const initialState = {
  employees: [],
  success: false,
};

// reducers sao utilizados, para armazenar e gerenciar o estado da aplicacao

const employeeReducer = (state = initialState, action = {}) => {
  console.log(">>> Action", action);
  switch (action.type) {
    case SET_EMPLOYEES:
      return updateObject(state, { employees: action.employees });
    case SUBMIT_EMPLOYEE_SUCCESS:
      return updateObject(state, { success: true });
    default:
      return state;
  }
};

export default employeeReducer;
