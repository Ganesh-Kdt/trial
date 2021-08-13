import React, { createContext, useEffect, useReducer, useState } from "react"
import axios from "axios"
import Coma from "./coma"
const FirstName=createContext()
const initialState=0
const reducer=(state,action)=>
{
    if(action.type==="inc")
    return state+1
    if(action.type==="dec")
    {
        if(state>0)
        return state-1
        else
        return state
    }
    return state
}
function App()
{
    const [state,dispatch]=useReducer(reducer,initialState)
    //const [state,setState]=useState([])
    const [c,setC]=useState({})
    /*useEffect(()=>
    {

        /*async function getData()
        {
            res=await axios.get("http://localhost:3000/32",{params:{name:"kdt",roll:50}})
            setState(res.data)
            console.log(res.data)
            let res1=await axios.post("http://localhost:3000/32",{name:"kudtarkar",roll:51})
            console.log(res1.data)
        }
        getData()
        axios.get("http://localhost:3000/32",{params:{name:"kdt",roll:50}}).then(
            (res)=>
            {
                setState(res.data)
                setC(res.data[0])
                console.log(res)
            }
        )
    },[])*/
   
    return(
        <>
        <FirstName.Provider value={{count:state,callReducer:dispatch}}><Coma/></FirstName.Provider>
        </>
    )
}
export default App
export {FirstName}