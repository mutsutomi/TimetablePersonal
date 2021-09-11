import React from "react"
import SubjectSummary from "./SubjectSummary";

const SubjectList = ({subjects}) =>{
  return(
    <div className="subject-list section">
      { subjects && subjects.map(subject =>{
        return (
          <SubjectSummary subject={subject} key={subject.id} />
        )
      })}
    </div>
  )
}

export default SubjectList;