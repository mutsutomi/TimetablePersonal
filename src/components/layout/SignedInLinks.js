import React from "react"
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Subject</NavLink></li>
      <li><NavLink to="/">Log out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;