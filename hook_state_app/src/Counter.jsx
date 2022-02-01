import React, { useState } from 'react';
import './counter.css';

function Counter({initial_value}) {
  
    //state of the counter
    let [currValue,setCurrValue] = useState(initial_value);


    //Change state 
    const changeValue = (query) =>{
        if(query === 1 || query === -1){
            currValue += query;
        }else if(query === 2){
            currValue *= query;
        }

        //change counter value
        setCurrValue(currValue);
    }
  return (
    <div id='container'>
       <p id='counter'>{currValue}</p>
       <div className="operation">
           <button id='increment' onClick={()=> changeValue(1)}>Increment</button>
           <button id='decrement' onClick={()=> changeValue(-1)}>Decrement</button>
           <button id='double' onClick={()=> changeValue(2)}>Double</button>
       </div>
    </div>
  )
}

export default Counter
