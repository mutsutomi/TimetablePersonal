import React from "react"
import SubjectSummary from "./SubjectSummary"

const SubjectDetails = (props) => {
  const id = props.match.params.id;
  return(
    <div className="container section subject-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Subject Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus consectetur, adipisci in, corrupti corporis omnis, maxime assumenda nisi expedita eius libero tempora totam officiis. Tenetur repellat accusamus excepturi aspernatur sint?</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Mutsumi Tomiki</div>
          <div>3rd, September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default SubjectDetails;