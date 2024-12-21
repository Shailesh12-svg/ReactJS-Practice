import React from 'react'
import HandleClick from './components/class1';
import Counter from './components/counter';
import Children from './components/Children';
function App() {

  return (
    <div className="App">
     <h1>Welcome to React Js </h1>
    <Counter name="Shailesh Mallick"/>
    <HandleClick/>
    <Children>
    <p>Description about children</p>
    </Children>
    </div>
  );
}

export default App;
