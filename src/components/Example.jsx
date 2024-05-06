import React,{useReducer} from 'react'

function Example() {
    const reducer = (state, action)=>{
        switch(action.type){
        case 'increment':
            return(state.count + 1)
            case  'decrement':
            return (state.count - 1)
        }

    }

    const [state, dispatch] = useReducer(reducer, {count:0})

  return (
    <div>
      <h1>Count :{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
    </div>
  )
}

export default Example
