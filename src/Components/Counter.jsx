
import { useReducer } from 'react';
import './Counter.css'

import React from 'react'

function Counter() {
 
     const reducerfn =(state, action)=>{
        //logic 
        if(action.type==="inc"){
            return{
                ...state,
                count:state.count + action.countValue

            }
        } else if(action.type==="dec"){
            return{
                ...state,
                count:state.count - action.countValue
            }
        }

        else if(action.type==="reset"){
            return{
                ...state,
                count:action.payload
            }
        }

        return state;

     }

   const[state, dispatch] = useReducer(reducerfn,{count:0});
  return (
    <div className='mainDiv'>



        <h1>{state.count}</h1>

       
        <button onClick={()=>{dispatch({
                 type:"inc",
                 countValue:5
        })}} ><b>INC Count </b></button>



        <button onClick={()=>{dispatch({
            type:"dec",
            countValue:2
        })}} ><b>DEC Count</b></button>






        <button onClick={()=>{dispatch({
            type:"reset",
            payload:0
        })}}><b>Reset</b></button>




    </div>
  );
}

export default Counter;