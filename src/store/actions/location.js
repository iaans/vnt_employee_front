//IMPORTS
import api from "../../services/api";

import { SET_UFS, SET_CITIES } from "../actionTypes";
import { makeActionCreator } from "../../helpers/mix";

//MAKE ACTION CREATOR
const setUfs = makeActionCreator(SET_UFS, "ufs");
const setCities = makeActionCreator(SET_CITIES, "cities");

//FUNCTION FOR GETTING UFS
export function getUfs() {
  return (dispatch, getState) => {
    return api
      .get("/list-ufs")
      .then((res) => {
        dispatch(setUfs(res.data));
      })
      .catch(console.error);
  };
}

//FUNCTION FOR GETTING CITIES
export function getCities(uf) {
  console.log("CHEGOU AQUI!!!!!", uf);
  return (dispatch, getState) => {
    return api
      .get(`/get-cities-by-state/${uf}`)
      .then((res) => {
        dispatch(setCities(res.data[0].cities));
      })
      .catch(console.error);
  };
}
