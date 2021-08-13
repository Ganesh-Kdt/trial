import React, { useContext } from "react"
import { FirstName } from "./App"
function Comc()
{
    const fname=useContext(FirstName)
    return(
        <>
        <h1>Count is {fname.count}</h1>
        <button onClick={()=>fname.callReducer({type:"inc"})}>Inc</button>
        <button onClick={()=>fname.callReducer({type:"dec"})}>Dec</button>
        </>
    )
}
export default Comc