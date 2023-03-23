import React, { useState } from "react";
import ListMemo from ".";


const MainApp = () => {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            <ListMemo input={input} />
        </>
    )
}
export default MainApp;
