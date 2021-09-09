import { updateObject } from "../../helpers/mix";
import { SET_EMPLOYEES, SET_UPDATING_EMPLOYEE } from "../actionTypes";

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
};

// reducers sao utilizados, para armazenar e gerenciar o estado da aplicacao

const employeeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return updateObject(state, { employees: action.employees });
    case SET_UPDATING_EMPLOYEE:
      return updateObject(state, { updatingEmployee: action.updatingEmployee });
    default:
      return state;
  }
};

export default employeeReducer;
