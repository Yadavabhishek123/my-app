import { createContext } from "react";  

// const MyContext = createContext(0);

const MyContext = createContext({
    Count:0,
    setCount:()=>{}
});
export default MyContext;