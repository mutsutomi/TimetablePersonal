import React from "react"

const SubjectSummary = ({subject}) => {
  return(
    <div className="card z-depth-0 subject-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{subject.title}</span>
        <p>Posted by Mutsumi Tomiki</p>
        <p className="grey-text">3rd September</p>
      </div>
    </div>
  )
}

export default SubjectSummary;