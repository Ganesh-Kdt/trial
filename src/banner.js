import React, { useEffect } from "react"

function Banner()
{
    useEffect(()=>
    {
        console.log("useEffect-banner")
        return ()=>   //During component unmounting only the return function runs and not the lines above it
        {
            console.log("cleanup")
        }
    })
    return(
        <>
        {console.log("banner")}
        <h1>Banner</h1>
        </>
    )
}
export default Banner