import { useState, useMemo, useEffect } from "react";
const UseMemoHook = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowfunction(number);
    }, [number]);
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    // const themeStyle = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    useEffect(() => {
        console.log('theme chnaged');
    }, [themeStyle])
    function slowfunction(num) {
        console.log('calling slow function');
        for (let i = 0; i < 1000000; i++) { }
        return num * 2;
    }
    return (<>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => { setDark(prevDark => !prevDark) }}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
    </>)

}
export default UseMemoHook;