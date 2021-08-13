import React,{useContext} from "react"
import Comb from "./comb"
import { FirstName } from "./App"
function Coma()
{
    const fname=useContext(FirstName)
    return(
        <>
        <h1>Count is {fname.count}</h1>
        <button onClick={()=>fname.callReducer({type:"inc"})}>Inca</button>
        <button onClick={()=>fname.callReducer({type:"dec"})}>Deca</button>
        <Comb/>
        </>
    )
}
export default Coma