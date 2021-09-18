import authReducer from "./authReducer";
import subjectReducer from "./subjectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer