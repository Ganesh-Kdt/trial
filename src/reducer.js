const iState={
    counter:0,
}
const reducer=(state=iState,action)=>
{
    if(action.type==="inc")
    return {
        ...state,
        counter:state.counter+1
    }
    if(action.type==="dec")
    return {
        ...state,
        counter:state.counter-1
    }
    return state
}
export default reducer