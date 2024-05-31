import React , { useState, useMemo } from 'react'

function useMemoHook() {
    const [Count, setCount] = useState(0);
    const [Input, setInput] = useState(0)
    
    let ans = useMemo(() => {
    ans = ((parseInt(Input))*(parseInt(Input)+1))/2;
    }, [Input]); // use memo is reduce extra re rendering and save our time
        
    
  return (
    <div>
        <input type='text' placeholder='Find the sum from 1 to n' onChange={(e) => setInput(e.target.value)}>
        </input>
        <br/>
        Sum of first {Input} number are {ans}
        <br/>
        <button onClick={() => setCount(Count+1)}>Counter is:- {Count}</button>
    </div>
  )
}

export default useMemoHook;
