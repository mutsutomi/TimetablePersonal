const initState = {
  subjects: [
    {id:"1", title: "English", content: "url1"},
    {id:"2", title: "Math", content: "url2"},
    {id:"3", title: "Law", content: "url3"},
  ]
}
const subjectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SUBJECT":
      console.log("created subject", action.subject);
      return state;
    case "CREATE_SUBJECT_ERROR":
      console.log("create subject error", action.err);
      return state;
    default:
      return state;
  }
} 

export default subjectReducer