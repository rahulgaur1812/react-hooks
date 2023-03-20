import { useEffect, useState } from "react";
const UseEffect2Hook = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const handleresize = () => {
        setwindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleresize)
    }, [])
    return (<>
        {windowWidth}
    </>)
}
export default UseEffect2Hook