import React, { useState } from "react"
function Form()
{
    const [arr,setArr]=useState([])
    const [state,setState]=useState({
        id:"",
        branch:"",
        college:"",
        desc:false
    })
    function handleChange(e)
    {
        let {value,name,id}=e.target
        if(id==="ch")
        {
            setState((prevState)=>
        {
            return{
                ...prevState,
                [name]:e.target.checked
            }
        })
        }
        else{
        setState((prevState)=>
        {
            return{
                ...prevState,
                [name]:value
            }
        })
    }
    }
    function handleForm()
    {
        //arr.push(state) //If we do this then re-rendering won't happen,re-rendering only happens when state is changed through setState methods
        setArr((prevArr)=>
        {
            return[
                ...prevArr,
                state
            ]
        })
        setState(()=>
        {
            return{
                id:"",
                branch:"",
                college:"",
                desc:false
            }
        })
    }
    return(
        <>
        <label>Id</label>
        {console.log(state)}
        <input value={state.id} name="id" onChange={handleChange}/>
        <select name="branch" value={state.branch} onChange={handleChange}>
            <option value="">select</option>
            <option value="extc">Extc</option>
            <option value="comp">Comp</option>
        </select>
        <input list="data" value={state.college} name="college" onChange={handleChange}/>
        <datalist id="data">
            <option value="vesit">vesit</option>
            <option value="terna">terna</option>
        </datalist>
        <input type="checkbox" checked={state.desc} name="desc" id="ch" onChange={handleChange}/>
        <button onClick={handleForm}>Submit form</button>
        {console.log(arr)}
        {arr.map((item,index)=>
        {
            return(
            <div key={index}>
                <div>{item.id}</div>
                <div>{item.branch}</div>
                <div>{item.college}</div>
                <div>{item.desc.toString()}</div>
            </div>
            )
        })}
        </>
    )
}
export default Form