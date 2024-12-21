import React from "react";

class HandleClick extends React.Component{
    //
    constructor(props){
        super(props);
        
    this.state ={
        count:0    //Count value
    }
}


    increment =()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }),()=>{
            console.log(`Incremented sucessfully`)
        })
    }

    decrement =()=>{
        this.setState((prevState)=>({
            count:prevState.count-1
        }))
    }

    reset =()=>{
        this.setState((prevState)=>({
            count:0
        }))
    }

    render(){
        return (
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default HandleClick;