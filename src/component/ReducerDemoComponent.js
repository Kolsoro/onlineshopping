import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default:
            console.log('Unable to execute');

    }
}

export default function ReducerDemoComponent() {
    // state here is used to store the data & dispatch is used to send the data to state
    // according do different situations dispatch should get the value & send it to state 
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <>
        [{state.count}] Likes
            <button onClick={() => dispatch({ type: 'increment' })}>Like</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Dislike</button>

        </>
    )
}