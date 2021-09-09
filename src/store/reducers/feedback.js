import { updateObject } from "../../helpers/mix.js";
import { SET_SUCCESS, SET_ERRORS } from "../actionTypes";

const initialState = {
  errors: [],
  success: "",
};

const feedbackReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SUCCESS:
      return updateObject(state, { success: action.success });
    case SET_ERRORS:
      const message =
        action?.errors?.length > 0
          ? action.errors
          : [{ msg: "Something went wrong, try again later" }];
      return updateObject(state, { errors: message });
    default:
      return state;
  }
};

export default feedbackReducer;
