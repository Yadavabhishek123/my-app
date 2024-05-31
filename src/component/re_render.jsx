
import React from 'react'

const Re_render = React.memo(function Re_render({title}) { //  this is called props destructuring, here we use some properties of props directly in this way, otherwise we use props.title

  // using memo for minimizing re-rendering
  return (
    <div>
        <h1> {title} </h1>
    </div>
  )
})

export default Re_render;




// this is app.js code for this file

/*import { useState } from 'react';
import './App.css';
import Rerender from './component/re_render';

function App() {
  const [title, settitle] = useState();
  function updatetitle() {
    settitle(Math.random());
  }
  return (
    <div className="App">
      <button onClick={updatetitle}>Click me</button>
      
      <Rerender title={title}/>
      <Rerender title="Abhishek 1"/>
      <Rerender title="Abhishek 2"/>
      <Rerender title="Abhishek 3"/>
      <Rerender title="Abhishek 4"/>
    </div>
  );
}

export default App;
*/

