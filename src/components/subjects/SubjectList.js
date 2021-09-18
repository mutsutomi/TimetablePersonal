import React from "react"
import SubjectSummary from "./SubjectSummary";
import { Link } from "react-router-dom"

const SubjectList = ({subjects}) =>{
  return(
    <div className="subject-list section">
      { subjects && subjects.map(subject =>{
        return (
          <Link to ={"/subject/"+ subject.id} key={subject.id}>
            <SubjectSummary subject={subject} key={subject.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default SubjectList;