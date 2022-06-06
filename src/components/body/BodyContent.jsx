import React from 'react'
import { useFloat } from '../../context/floatContext'
import { FloatingBox } from "./../index-components"
import "./BodyContent.css"
const BodyContent = () => {
    const { float } = useFloat()
  return (
    <main className = {`interior-container-main ${float}`}>
        <div className = "interior-container">
        </div>
        <FloatingBox />
    </main>
  )
}

export default BodyContent