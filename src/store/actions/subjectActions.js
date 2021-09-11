export const createSubject = (subject) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: "CREATE_SUBJECT", subject})
  }
}