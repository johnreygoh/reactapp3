import { useReducer } from "react";

// initial state
const initialState = {
    firstname: '',
    lastname: '',
    department: '',
    email: '',
}

// create reducer function
function formReducer(state, action) {
    switch (action.type) {
        case 'INPUT_MOD':
            return {
                ...state,
                [action.field]: action.value
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}


function Demo_useReducer() {

    const [state, dispatch] = useReducer(formReducer, initialState);


    const handleChange = (e) => {

        dispatch({
            type: 'INPUT_MOD',
            field: e.target.name,
            value: e.target.value
        })

    }

    return (
        <>
            <h2>Demo useReducer</h2>

            <form onSubmit={(e) => {
                e.preventDefault();
                alert(`Submitted: ${state.firstname} ${state.lastname}`);
            }}>

                Firstname
                <input type='text'
                    name='firstname'
                    value={state.firstname}
                    onChange={handleChange}
                />
                <br />
                Lastname
                <input type='text'
                    name='lastname'
                    value={state.lastname}
                    onChange={handleChange}
                />
                <br />
                Department
                <input type='text'
                    name='department'
                    value={state.department}
                    onChange={handleChange}
                />
                <br />
                Email
                <input type='text'
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
                <button onClick={(e) => dispatch({ type: 'RESET' })} >Reset</button>


            </form>
        </>

    );
}
export default Demo_useReducer;