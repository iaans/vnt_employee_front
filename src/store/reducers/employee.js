import { updateObject } from "../../helpers/mix";
import {
  SET_EMPLOYEES,
  SUBMIT_EMPLOYEE_SUCCESS,
  SET_UPDATING_EMPLOYEE,
} from "../actionTypes";

const initialState = {
  employees: [],
  updatingEmployee: {
    _id: null,
    name: "",
    birthDate: null,
    gender: "",
    state: "",
    city: "",
    role: "",
    salary: 0,
  },
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
    case SET_UPDATING_EMPLOYEE:
      console.log(action.updatingEmployee);

      return updateObject(state, { updatingEmployee: action.updatingEmployee });
    default:
      return state;
  }
};

export default employeeReducer;
