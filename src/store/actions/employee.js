import api from "../../services/api";

import {
  SET_EMPLOYEES,
  SET_UPDATING_EMPLOYEE,
  SET_CREATE_EMPLOYEE_SUCCESS,
} from "../actionTypes";
import { makeActionCreator } from "../../helpers/mix";
import { setSuccess, setErrors } from "./feedback";

const setEmployees = makeActionCreator(SET_EMPLOYEES, "employees");
export const setCreateUpdateEmployeeSuccess = makeActionCreator(
  SET_CREATE_EMPLOYEE_SUCCESS,
  "status"
);
export const setUpdatingEmployee = makeActionCreator(
  SET_UPDATING_EMPLOYEE,
  "updatingEmployee"
);

// actions sao utilizadas para chamadas de APIs ou chamadas para atualizacao do estado, por ex as do makeActionCreator acima

export function listEmployees() {
  return (dispatch, getState) => {
    return api
      .get("/list-employees")
      .then((res) => {
        dispatch(setEmployees(res.data));
      })
      .catch((error) => {
        dispatch(setErrors(error.response?.data.errors));
      });
  };
}

export function deleteEmployee(id) {
  return (dispatch, getState) => {
    return api
      .delete(`/delete-employee/${id}`)
      .then((res) => {
        dispatch(listEmployees());
        dispatch(setSuccess("Employee successfully deleted"));
      })
      .catch((error) => {
        dispatch(setErrors(error.response?.data.errors));
      });
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
        dispatch(setSuccess("The employee was successfully created"));
        dispatch(setCreateUpdateEmployeeSuccess(true));
      })
      .catch((error) => {
        dispatch(setErrors(error.response?.data.errors));
      });
  };
}

export function updateEmployee({
  _id,
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
      .put("/put-employee", {
        _id,
        name,
        birthDate,
        gender,
        state,
        city,
        role,
        salary,
      })
      .then((res) => {
        dispatch(setSuccess("The employee was successfully updated"));
      })
      .catch((error) => {
        dispatch(setErrors(error.response?.data.errors));
      });
  };
}
