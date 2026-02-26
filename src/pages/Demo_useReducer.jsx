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
        case 'INPUT_CHANGE':
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
                    onChange={(e) => dispatch(type = 'INPUT_CHANGE',
                        field = e.target.name,
                        value = e.target.value
                    )}
                />
                <br />
                Lastname
                <input type='text'
                    name='lastname'
                    value={state.lastname}
                    onChange={(e) => dispatch(type = 'INPUT_CHANGE',
                        field = e.target.name,
                        value = e.target.value
                    )}
                />
                <br />
                Department
                <input type='text'
                    name='department'
                    value={state.department}
                    onChange={(e) => dispatch(type = 'INPUT_CHANGE',
                        field = e.target.name,
                        value = e.target.value
                    )}
                />
                <br />
                Email
                <input type='text'
                    name='email'
                    value={state.email}
                    onChange={(e) => dispatch(type = 'INPUT_CHANGE',
                        field = e.target.name,
                        value = e.target.value
                    )}
                />
                <br />
                <button type="submit">Submit</button>
                <button onClick={(e) => dispatch({ type: 'RESET' })} >Reset</button>


            </form>
        </>

    );
}
export default Demo_useReducer;