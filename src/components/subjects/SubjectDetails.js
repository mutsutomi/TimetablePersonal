import React from "react"
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom"

const SubjectDetails = (props) => {
  const { subject, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />
  if (subject) {
    return (
      <div className="container section subject-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ subject.title }</span>
            <p>{ subject.content }</p>
          </div>
          <div className="card-action gret ligten-4 grey-text">
            <div>Posted by {subject.studentFirstName} {subject.studentLastName}</div>
            <div>3rd, September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading subject...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const subjects = state.firestore.data.subjects;
  const subject = subjects ? subjects[id] : null
  return {
    subject: subject,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "subjects" }
  ])
)(SubjectDetails);