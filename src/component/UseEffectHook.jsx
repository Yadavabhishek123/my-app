

// ********** Incorrect dependency in useEffect Hook **********

// import React, {useState, useEffect} from 'react'

// function UseEffectHook() {
//     const [count, setcount] = useState(0)

//     const tick = () => {
//         setcount(count+1)
//     }
//     useEffect(() => {
//         const interval = setInterval(tick, 1000)

//         return () => {
//           clearInterval(interval)
//         }
//     }, [count])

//   return (
//     <div >
//         <h1>{count}</h1>
//     </div>
//   )
// }

// export default UseEffectHook

// ********** Unmounting featuer of useEffect Hook **********
// Basically this is a unmount feater of useEffect hook for unmounting we return a clanup code and in this we write this return function in useEffect hook and remove eventlisteners.

// import React, {useState, useEffect} from 'react'

// function UseEffectHook() {
//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)
//     const [show, setshow] = useState(true)

//     const logmouseposition = (e) => {
//         console.log(" Mouse Event called")
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     useEffect( ()=>{
//         console.log("UseEffectHook called")
//         window.addEventListener('mousemove', logmouseposition)

//         return  () => {
//             console.log("Removing my event listener")
//             window.removeEventListener('mousemove', logmouseposition)
//         }
//     }, []) 
//     const changeBehaviour = () =>{
//         setshow(prev => !prev)
//     }

//   return (
//     <div >
//         <button onClick={changeBehaviour}> Click me : {show}</button>
//         {show && <h1>Position X:- {x} Y:- {y}</h1>}
//     </div>
//   )
// }

// export default UseEffectHook


// *******Below Methods are solve the problem of componentDidMount method that is used in class componentes********

// ********** Run useEffect Once **********


// import React, {useState, useEffect} from 'react'

// function UseEffectHook() {
//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)

//     const logmouseposition = (e) => {
//         console.log(" Mouse Event called")
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     useEffect( ()=>{
//         console.log("UseEffectHook called")
//         window.addEventListener('mousemove', logmouseposition)
//     }, []) //  here if we use an empty array then this useEffect is called only once
    
//   return (
//     <div >
//         Position X:- {x} Y:- {y}
//     </div>
//   )
// }

// export default UseEffectHook


// **********  Conditional useEffect Problem **********


// import React, {useState, useEffect} from 'react'

// function UseEffectHook() {
//     const [count, setCount] = useState(0)
//     const [name, setName] = useState("")

//     useEffect( ()=>{
//         document.title = `Clicked ${count} times`
//         console.log("Title Update")
//     }, [count])// we paas array as a second argument in useEffect hook for condition when our condition matched then useEffect works in this example if count changes then useEffect works
//     const ChangeName = (e) => {
//         setName(e.target.value)
//     }
//     const increment = () => {
//         setCount(prev => prev+1)
//     }
//   return (
//     <div>
//         <input type='text' value={name} onChange={ChangeName}></input>
//         <button onClick={increment}>count : {count}</button>
//         UseEffectHook
//     </div>
//   )
// }

// export default UseEffectHook



// ********** Basic **********


// import React, {useState, useEffect} from 'react'

// function UseEffectHook() {
//     const [count, setCount] = useState(0)

//     useEffect( ()=>{
//         document.title = `Clicked ${count} Times`
//     })

//     const increment = () => {
//         setCount(prev => prev+1)
//     }
//   return (
//     <div>
//         <button onClick={increment}>count : {count}</button>
//         <br></br>
//         <br></br>
//         UseEffectHook
//     </div>
//   )
// }

// export default UseEffectHook