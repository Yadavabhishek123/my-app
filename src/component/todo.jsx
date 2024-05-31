import React from 'react'

function todo({title, desc}) {
  return (
    <div>Title of todo is {title} and Description is {desc}</div>
  )
}

export default todo;



// app.js file code below




/*
const [todo, settodo] = useState([{id:"1",title:"todo1",desc:"desc1"},
    {id:"2",title:"todo2", desc:"desc2"}
  ]);
  function addnewtodo() {
    settodo([...todo,{id:"3",title:"abhishek", description:"done all his work"}]); // use seprator operator for add new element into a array otherwise this is not work properly
  }
  return (
    <div className="App">
      <button onClick={addnewtodo}>Click me</button>
      {todo.map(todo=> <Todo title={todo.title} desc={todo.desc}/>)}  
    </div>
  );

  // in the return function use this map funciton or an for loop for iterates over array so that we access todo 
}

*/
