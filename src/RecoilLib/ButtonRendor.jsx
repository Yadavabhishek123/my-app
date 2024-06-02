import React from 'react'
import { useRecoilState } from 'recoil'
import CountState from "./atoms/countvar"

export default function ButtonRender() {
    const [Count,setCount]= useRecoilState(CountState); // here we are using useRecoilState because in this compo we use both value and state
    return (
        <div>
            <button onClick={() => setCount(() => Count + 1)}>Increase</button>
            <button onClick={() => setCount(() => Count - 1)}>Decrese</button>
        </div>
    )
}
