import React from 'react'
import { useFloat } from '../context/floatContext'
import { useNavigate } from 'react-router-dom'
import "./PageTwo.css"

const PageTwo = () => {
    const { setFloat }= useFloat()
    const navigate = useNavigate()
    const backPageClickHandler = () => {
        setFloat(() => ({position:"center", style:"blue-border"}))
        navigate("/")
    }
  return (
    <div className = "page-two-container">
        <h2>Page2</h2>
        <p>I am Ramalinga Reddy. I live in Hyderabad. I speak Telugu and English. I read books. Books has been constant resource for my growth. I recently read "Start with Why" and I was amazed why some people fail even after having plenty of resource and at the same person w/o a formal education can win in this world. Although I don't travel much I like to revisit the places which instills peace. I have been learning to cook  these days. </p>
        <button onClick={backPageClickHandler} className="back-btn">Back</button>
    </div>
  )
}

export default PageTwo