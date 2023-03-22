import React, { useEffect, useState } from 'react';
const List = ({ getItems }) => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        setItem(getItems());
        console.log('updating Items')
        return (() => {
            setItem([])
        })

    }, [getItems])
    return items?.map(item => <div key={item}>{item}</div>)

}
export default List;