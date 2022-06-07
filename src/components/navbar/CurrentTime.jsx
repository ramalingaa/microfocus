import React, { useState, useEffect, useRef } from 'react'

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState()
    const intervalId = useRef()
    useEffect(() =>{
        intervalId.current = setInterval(() =>{
            const date = new Date()
            const timeNow = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()) + ':' + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
            setCurrentTime(() => timeNow)
        },1000)
        return () => clearInterval(intervalId.current)
    },[])
  return (
    <div className = "current-time-container">
        {currentTime}
    </div>
  )
}

export default CurrentTime