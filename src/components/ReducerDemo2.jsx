import { useReducer } from "react";

// reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'Dagdag':
            return { count: state.count + 1 };
        case 'Bawas':
            return { count: state.count - 1 };
        case 'Ulit':
            return { count: 0 };
        default:
            return state;
    }
}

function ReducerDemo2() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <h2> Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'Dagdag' })}>Dagdag</button>
            <button onClick={() => dispatch({ type: 'Bawas' })}>Bawas</button>
            <button onClick={() => dispatch({ type: 'Ulit' })}>Ulit</button>
        </>
    );


}
export default ReducerDemo2;