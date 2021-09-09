import { SET_SUCCESS, SET_ERRORS, SET_LOADING } from "../actionTypes";
import { makeActionCreator } from "../../helpers/mix";

//MAKE ACTION CREATOR
export const setSuccess = makeActionCreator(SET_SUCCESS, "success");
export const setErrors = makeActionCreator(SET_ERRORS, "errors");
export const setLoading = makeActionCreator(SET_LOADING, "loading");
//export { setSuccess, setErrors };
