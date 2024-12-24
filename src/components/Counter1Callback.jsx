import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
//Child component

//We are avoiding the unessary re-renders ..

const Child =React.memo(({increment})=>{
    console.log('Child Component rendered');
    return (
        <button onClick ={increment}>Increment count</button>
    )

});

//Without Memo
// const Child = ({increment})=>{
//     console.log('Child Component rendered');
//     return (
//         <button onClick ={increment}>Increment count</button>
//     )
// }




//Parent component
const Counter1Callback = () => {
    const [count,setCount]=useState(0);
    const [text, setText] = useState("");

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
        // console.log(`Count is: ${count}`);
      }, []);    //used useeffect here ...

    // const increment =()=>{
    //     setCount((prevCount)=>prevCount+1)
    // }



  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
    <h1>Parent Component</h1>
    <p>Count: {count}</p>

    {/* Child component */}
    <Child increment={increment} />

    {/* Non-related state update */}
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
      style={{ display: "block", marginTop: "20px", padding: "5px" }}
    />
  </div>
);
};

export default Counter1Callback