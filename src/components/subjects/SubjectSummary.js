import React from "react"
import moment from "moment"

const SubjectSummary = ({subject}) => {
  return(
    <div className="card z-depth-0 subject-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{subject.title}</span>
        <p>Posted by the {subject.studentFirstName} {subject.studentLastName}</p>
        <p className="grey-text">{moment(subject.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default SubjectSummary;