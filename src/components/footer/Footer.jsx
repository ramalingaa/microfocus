import React from 'react'
import "./Footer.css"
import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <div className = "footer-container">
        <NavLink to = "/page2" className = "nav-link">Go To Page2</NavLink>
    </div>
  )
}

export default Footer