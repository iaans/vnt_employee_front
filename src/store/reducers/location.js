import { updateObject } from "../../helpers/mix.js";
import { SET_CITIES, SET_UFS } from "../actionTypes";

const initialState = {
  ufs: [],
  cities: [],
  success: false,
};

const locationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_UFS:
      return updateObject(state, { ufs: action.ufs });
    case SET_CITIES:
      return updateObject(state, { cities: action.cities });
    default:
      return state;
  }
};

export default locationReducer;
