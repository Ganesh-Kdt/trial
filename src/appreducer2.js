import React from "react"
import {connect, useDispatch, useSelector} from "react-redux"
function App1(props)
{
    const st=useSelector(state=>state)
    const dispatch=useDispatch()
    return(
        <>
        {console.log(st)}
        <h1>{st.counter}</h1>
        <button onClick={()=>dispatch({type:"dec"})}>dec</button>
        </>
    )
}

 
export default App1