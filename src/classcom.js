import React from "react"
class ClassCom extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={counter:0,value:5}
        this.handleClick=this.handleClick.bind(this)
        this.log=this.log.bind(this)
    }
    log()
    {
        console.log(this.state.counter)
    }
    handleClick()
    {
        this.setState((prevState)=>  //The setState are bundled together and the callback runs only after re-render and componenetdidupdate happens at the last
        {
            return{
                counter:prevState.counter+1
            }
        },()=>console.log(this.state.counter))
        this.log()
        this.setState((prevState)=>
        {
            return{
                value:prevState.value+5
            }
        },()=>console.log(this.state.value))

    }
    componentDidUpdate(prevState,prevProps)
    {
        if(prevState.counter!==this.state.counter)
        {
            console.log("update")
        }
    }
    componentWillUnmount()
    {
        document.removeEventListener("click",()=>console.log("unmount"))
    }
    componentDidUpdate(prevState,prevProps)
    {
        if(prevState.counter!==this.state.counter)
        {
        document.addEventListener("click",()=>console.log("mount"))
        }
    }
    componentDidMount()
    {
        document.addEventListener("click",()=>console.log("mount"))   
    }
    render()
    {
        console.log("render")
        return(
            <>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}
export default ClassCom