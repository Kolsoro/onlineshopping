import React from "react";

export default class Counter extends React.Component
{
    render(){
        const{counter,increment,decrement,reset}=this.props;

        return(
            <div>
                <div>
                    {counter} Likes
                </div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    }
}