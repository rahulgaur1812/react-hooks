import { useState, useEffect, useRef } from "react";
const UseRefHook = () => {
    const [name, setName] = useState('');
    // const renderCount = useRef(1);
    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    // }, [])
    //const inputref = useRef();

    // function Focus() {
    //     inputref.current.focus();
    //     inputref.current.value = 'some value';
    // }

    const prevName = useRef('')
    useEffect(() => {
        prevName.current = name
    }, [name])
    return (<>
        {/* <input ref={inputref} value={name} onChange={e => setName(e.target.value)} /> */}
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>My Name is {name} and it used to be {prevName.current}</div>
        {/* <div>I rendered {renderCount.current} times.</div>
        <button onClick={Focus}>Focus</button> */}
    </>)

}

export default UseRefHook;