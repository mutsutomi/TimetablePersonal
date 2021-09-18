import authReducer from "./authReducer";
import subjectReducer from "./subjectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  firestore: firestoreReducer
})

export default rootReducer