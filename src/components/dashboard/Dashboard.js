import React, { Component } from "react"
import Notification from "./Notification"
import SubjectList from "../subjects/SubjectList"
import { connect } from "react-redux"

class Dashboard extends Component {
  render(){
    const {subjects } = this.props

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
  return {
    subjects: state.subject.subjects
  }
}
export default connect(mapStateToProps)(Dashboard);