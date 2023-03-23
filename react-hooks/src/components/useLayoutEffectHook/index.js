import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffectHook = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        console.log(count);
    }, [count]);
    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <div>{count}</div>
        </>
    )
}
export default UseLayoutEffectHook;