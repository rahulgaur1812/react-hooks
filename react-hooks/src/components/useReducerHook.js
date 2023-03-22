import React, { useReducer, useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const increment = () => {
        dispatch({ type: 'increment' })
    }
    const decrement = () => {
        dispatch({ type: 'decrement' })
    }
    return (
        <>
            <button onClick={increment}>+</button>
            <label>{state.count}</label>
            <button onClick={decrement}>-</button>
        </>
    )
}
export default UseReducerHook;