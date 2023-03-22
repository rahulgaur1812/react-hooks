import React, { useState } from "react";
import Mycontext from "./MyContext";
const MyProvider = (props) => {
    const [formdata, setFormdata] = useState({});
    const updateFormData = (key, value) => {
        setFormdata({ ...formdata, [key]: value });
    }
    const data = {
        formdata,
        updateFormData
    }

    console.log(data)
    return (
        <Mycontext.Provider value={data}>
            {props.children}
        </Mycontext.Provider>
    )
}
export default MyProvider;