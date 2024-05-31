import React, {useState} from 'react'

function UseStateHook() {
  const [items, setItems] = useState([]);// State variable can be a string, number, boolean, object or a array

  const addNewItem = () => {
    setItems([...items, {
      id:items.length,
      value : Math.floor(Math.random()*10) + 1
    }])
  }
  
  
  return (
    <div>
      <button onClick={addNewItem}> Click Me</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}
export default UseStateHook;













// ********** useState Hook for an object **********
// import React, {useState} from 'react'

// function UseStateHook() {
//   const [name, setname] = useState({firstName:"", lastName:""});// State variable can be a string, number, boolean, object or a array

//   const changeFirstName =  (e) => {
//     setname({...name, firstName: e.target.value}) // ... is a seprator operator that make a copy of object and then update the repect value of an object
//   }
//   const changeLastName = (e) => {
//     setname({...name, lastName: e.target.value})
//   }
  
//   return (
//     <form>
//       <input type='text' value={name.firstName} onChange={changeFirstName}></input>
//       <h1>  {name.firstName}</h1>
//       <input type='text' value={name.lastName} onChange={changeLastName}></input>
//       <h1>{name.lastName}</h1>
//     </form>
//   )
// }
// export default UseStateHook;




// ************Use State With prevstate************

// import React, {useState} from 'react'

// function UseStateHook() {
//   const [count, setCount] = useState(0);
//   const initial = 0;
  
//   const Increament = () => {
//     setCount(prevState => prevState+1)
//   }
//   const Increament5 = () => {
//     setCount(prevState => prevState+1)
//     setCount(prevState => prevState+1)
//     setCount(prevState => prevState+1)
//     setCount(prevState => prevState+1)
//     setCount(prevState => prevState+1)
//   }
//   return (
//     <div>
//     <p>count : {count}</p>
//     <button onClick={() => setCount(initial)}> initial Value</button>
//     <button onClick={Increament}> Increment</button>
//     <button onClick={Increament5}> Increment by 5</button>
//     </div>
//   )
// }
// export default UseStateHook;

