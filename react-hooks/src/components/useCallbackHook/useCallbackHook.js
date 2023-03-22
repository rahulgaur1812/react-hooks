import React, { useCallback, useMemo, useState } from "react";
import List from "./List";
const UseCallbackHook = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])
    const theme = {
        backgroundColor: dark ? '#000' : '#fff',
        color: dark ? '#fff' : '#000'
    }

    return (<>
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => { setDark(prevDark => !prevDark) }}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    </>)
}
export default UseCallbackHook;