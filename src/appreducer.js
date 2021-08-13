import React from "react"
import {connect} from "react-redux"
function App(props)
{
    return(
        <>
        {console.log(props)}
        <button onClick={()=>props.dispatch({type:"inc"})}>inc</button>
        </>
    )
}
const mapStateToProps=(state)=>
{
    return{
        c:state.counter
    }
}
 
export default connect(mapStateToProps)(App)