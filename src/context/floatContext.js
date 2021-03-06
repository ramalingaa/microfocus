import { createContext, useContext, useState } from "react"
const FloatContext = createContext()
const useFloat = () => useContext(FloatContext)

const FloatProvider = ({children}) => {
    const [float, setFloat] = useState({position:"", style:""})
    return (
        <FloatContext.Provider value = {{ float, setFloat }}>
            {children}
        </FloatContext.Provider>
    )
}
export { FloatProvider, useFloat}