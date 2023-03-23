import { useDeferredValue, useMemo } from "react";
const ListMemo = ({ input }) => {
    const List_Size = 20000;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < List_Size; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])
    return list;
}
export default ListMemo;