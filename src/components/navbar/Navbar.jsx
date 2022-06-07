import React from 'react'
import { CurrentTime } from '../index-components';
import "./Navbar.css"
import { useFloat } from "./../../context/floatContext"
const Navbar = () => {
    const {float, setFloat } = useFloat()
  return (
    <header className="navbar-container">
        <div onChange = {(e) => setFloat((prev) => ({...prev, position:e.target.value}))} className="navbar-position">
            Position : 
                <label htmlFor="center">
                    <input type = "radio" id = "center" name = "position" value = {"center"} checked = {float.position === "center"? true:false}/> Center
                </label>
                <label htmlFor="lower-right">
                    <input type = "radio" id = "lower-right" name = "position" value = {"lower-right"} checked = {float.position === "lower-right"? true:false}/> Lower-right
                </label>
        </div>
        <div>
            Press <strong>ESC</strong> key to hide Floating box. <strong>Enter</strong> to show it again
        </div>
        <CurrentTime />
    </header>
  )
}

export default Navbar