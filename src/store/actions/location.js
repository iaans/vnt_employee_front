//IMPORTS
import api from "../../services/api";

import { SET_UFS, SET_CITIES } from "../actionTypes";
import { makeActionCreator } from "../../helpers/mix";
import { setErrors, setLoading } from "./feedback";

//MAKE ACTION CREATOR
const setUfs = makeActionCreator(SET_UFS, "ufs");
const setCities = makeActionCreator(SET_CITIES, "cities");

//FUNCTION FOR GETTING UFS
export function getUfs() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    return api
      .get("/list-ufs")
      .then((res) => {
        dispatch(setUfs(res.data));
      })
      .catch((error) => {
        dispatch(setErrors(error.response?.data.errors));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

//FUNCTION FOR GETTING CITIES
export function getCities(uf) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    return api
      .get(`/get-cities-by-state/${uf}`)
      .then((res) => {
        dispatch(setCities(res.data[0].cities));
      })
      .catch((error) => {
        dispatch(setErrors(error.response?.data.errors));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
