import { useState, useEffect } from "react";
const UseEffecthook = () => {
    let [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    console.log('render');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
        return () => {
            console.log('return in useeffect');
        }
    }, [resourceType])
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Post</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((data, index) => {
                return <pre>{JSON.stringify(data)}</pre>
            })}
        </>
    )
}
export default UseEffecthook