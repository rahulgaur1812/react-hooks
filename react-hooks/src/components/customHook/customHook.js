import React, { useState } from 'react';
import UselocalStorage from './useLocalstorage';
const CustomHook = () => {
    const [name, setName] = UselocalStorage('name', '');
    return (
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
        />
    )
}
export default CustomHook;