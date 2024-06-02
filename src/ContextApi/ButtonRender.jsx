import React, {useContext} from 'react'
import MyContext from './context';
// import CountRender from './CountRender';

export default function ButtonRender() {
    const { Count,setCount } = useContext(MyContext);
    return (
        <div>
            <button onClick={() => setCount(() => Count + 1)}>Increase</button>
            <button onClick={() => setCount(() => Count - 1)}>Decrese</button>
        </div>
    )
}
