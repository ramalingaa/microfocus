import React from 'react'
import { CurrentTime } from '../index-components';
import "./Navbar.css"
import { useFloat } from "./../../context/floatContext"
const Navbar = () => {
    const { setFloat } = useFloat()
  return (
    <header className="navbar-container">
        <div onChange = {(e) => setFloat(e.target.value)}>
            Position: 
                <label htmlFor="center">
                    <input type = "radio" id = "center" name = "position" value = {"center"}/> Center
                </label>
                <label htmlFor="lower-right">
                    <input type = "radio" id = "lower-right" name = "position" value = {"lower-right"}/> Lower-right
                </label>
        </div>
        <div>
            Press ESC key to hide the window. Enter to show it again
        </div>
        <CurrentTime />
    </header>
  )
}

export default Navbar