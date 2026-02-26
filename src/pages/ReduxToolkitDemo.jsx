import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '../components/store';
import { increment, decrement, incrementByAmount } from '../components/CounterSlice';

function CounterComponent() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: '20px', border: '2px solid purple', maxWidth: '300px' }}>
            <h2>Redux Toolkit Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())} style={{ margin: '0 10px' }}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
        </div>
    );
}

function ReduxToolkitDemo() {
    return (
        <div>
            <h2>Redux Toolkit Demo</h2>

            <Provider store={store}>
                <CounterComponent />
            </Provider>

        </div>
    );
}

export default ReduxToolkitDemo;