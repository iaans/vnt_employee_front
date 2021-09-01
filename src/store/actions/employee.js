import api from "../../services/api";

import { SET_EMPLOYEES, SUBMIT_EMPLOYEE_SUCCESS } from "../actionTypes";
import { makeActionCreator } from "../../helpers/mix";

const setEmployees = makeActionCreator(SET_EMPLOYEES, "employees");
const createEmployeeSuccsess = makeActionCreator(SUBMIT_EMPLOYEE_SUCCESS);

// actions sao utilizadas para chamadas de APIs ou chamadas para atualizacao do estado, por ex as do makeActionCreator acima

export function listEmployees() {
  return (dispatch, getState) => {
    return api
      .get("/list-employees")
      .then((res) => {
        dispatch(setEmployees(res.data));
      })
      .catch(console.error);
  };
}

export function deleteEmployee(id) {
  return (dispatch, getState) => {
    return api
      .delete(`/delete-employee/${id}`)
      .then((res) => {
        dispatch(listEmployees());
      })
      .catch(console.error);
  };
}

export function createEmployee({
  name,
  birthDate,
  gender,
  state,
  city,
  role,
  salary,
}) {
  return (dispatch, getState) => {
    return api
      .post("/submit-employee", {
        name,
        birthDate,
        gender,
        state,
        city,
        role,
        salary,
      })
      .then((res) => {
        dispatch(createEmployeeSuccsess());
      })
      .catch(console.error);
  };
}
