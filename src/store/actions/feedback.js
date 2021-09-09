import { SET_SUCCESS, SET_ERRORS } from "../actionTypes";
import { makeActionCreator } from "../../helpers/mix";

//MAKE ACTION CREATOR
export const setSuccess = makeActionCreator(SET_SUCCESS, "success");
export const setErrors = makeActionCreator(SET_ERRORS, "errors");

//export { setSuccess, setErrors };
