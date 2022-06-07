import React, { useState, useEffect } from 'react'
import Draggable from "react-draggable";
import { useFloat } from '../../context/floatContext'
import "./BodyContent.css"

const BodyContent = () => {
  const [toggleDragBox, setToggleDragBox] = useState(true)
  const { float, setFloat } = useFloat()
   const dragHandler = () => {
    setFloat((prev) => ({...prev, position:""}))
   }
   useEffect(() => {
     const hideDragBoxHandler = (e) => {
      if(e.key === "Escape"){
          setToggleDragBox(() => false)
      }
     }
     const displayDragBoxHandler = (e) => {
       if(e.key === "Enter"){
        setToggleDragBox(() => true)
       }
     }
     window.addEventListener("keydown", hideDragBoxHandler)
     window.addEventListener("keydown", displayDragBoxHandler)
     return () => {
      window.removeEventListener("keydown", hideDragBoxHandler);
      window.removeEventListener("keydown", displayDragBoxHandler)
     }
   },[])
  return (
    <div className = { float.position ? `interior-container-main ${float.position}` : "interior-container"}>  
      <div>
       {
          float.position && <div className = "interior-container-onFloat">

          </div>
       }
        {toggleDragBox && <Draggable bounds={ float.position ? ".interior-container-main " : ".interior-container"}  onDrag = {dragHandler}>
            <div className= {`floating-box ${float.style} ${float.position ? "float-start" : ""}`} >
              {float.position ? float.position : "Floating..."}
              <p className = "drag-text">Drag me around...</p>
            </div>
        </Draggable>}
      </div>
    </div>
  )
}

export default BodyContent