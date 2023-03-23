import React, { useEffect, useState } from 'react';

const getSavedValue = (key, initialvalue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialvalue instanceof Function) return initialvalue()
    return initialvalue
}
const UselocalStorage = (key, initialvalue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialvalue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue]
}

export default UselocalStorage