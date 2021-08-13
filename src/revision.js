import React, { useEffect, useState } from "react"
import Banner from "./banner"
function Rev()
{
    const [count,setCount]=useState(0)
    const [log,setLog]=useState(true)
    //const [arr,setArr]=useState([{name:"ganesh",roll:30},{name:"dinesh",roll:31}])
    //const [obj,setObj]=useState({name:{first:"ganesh",middle:"dinesh",last:"kdt"},roll:30})
   /* function handleClick(username)
    {
        const newarr=arr.map((item)=>
        {
            if(item.name===username)
            {
                return{
                    ...item,
                    roll:33
                }
            }
            return {...item}
        })
        setArr(newarr)
        setObj((prevObj)=>
        {
            return{
                ...prevObj,
                name:{
                    ...prevObj.name,
                    last:"kudtarkar"
                }
            }
        })
    }*/
    useEffect(()=>
    {
        console.log("useEffect")
        const handleClick=()=>console.log("hi")
        document.addEventListener("click",handleClick)  //will attach this event
        return ()=>
        {
            console.log("cleanup")
            document.removeEventListener("click",handleClick) // This runs on every re-render and will remove the previous available event and then the upper portion of return will run
        }
    })
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>click</button>
        {log?<Banner/>:null}
        <button onClick={()=>setLog(false)}></button>
        </>
    )
}
export default Rev