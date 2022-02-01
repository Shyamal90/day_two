import React, { useState } from 'react';
import './counter.css';

function Counter({initial_value}) {
  
    //state of the counter
    const [currValue,setCurrValue] = useState(initial_value);

  return (
    <div id='container'>
       <p id='counter'>{currValue}</p>
       <div className="operation">
           <button id='increment'>Increment</button>
           <button id='decrement'>Decrement</button>
           <button id='double'>Double</button>
       </div>
    </div>
  )
}

export default Counter
