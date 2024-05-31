import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function Assignment1() {
    const [input, setInput] = useState();
    // Your solution starts here
    let expensiveValue = 1;
    expensiveValue = useMemo(()=>{
        let value = 1;
        if(input === 0){
            return 1;
        }
        for(let i=1; i<=input; i++){
            value = value*i;
        }
        return value;

    }, [input])
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}

export default Assignment1;