import authReducer from "./authReducer";
import subjectReducer from "./subjectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer
})

export default rootReducer