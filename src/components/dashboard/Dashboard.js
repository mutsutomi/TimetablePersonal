import React, { Component } from "react"
import Notification from "./Notification"
import SubjectList from "../subjects/SubjectList"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Redirect } from "react-router-dom"

class Dashboard extends Component {
  render(){
    const { subjects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SubjectList subjects={subjects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    subjects: state.firestore.ordered.subjects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "subjects" }
  ])
)(Dashboard);

