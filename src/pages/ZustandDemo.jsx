import { useStore } from "../components/useStore";

function BearCounter() {
    // We can select specific parts of the state to prevent unnecessary re-renders
    const bears = useStore((state) => state.bears);
    return <h2>There are {bears} bears in the forest.</h2>;
}

function Controls() {
    // We can grab the functions directly from our store hook
    const increasePopulation = useStore((state) => state.increasePopulation);
    const removeAllBears = useStore((state) => state.removeAllBears);

    return (
        <div style={{ marginTop: '20px' }}>
            <button onClick={increasePopulation}>Add Bear</button>
            <button onClick={removeAllBears} style={{ marginLeft: '10px' }}>Remove All</button>
        </div>
    );
}


function ZustandDemo() {
    return (
        <div>
            <h2>Zustand Demo</h2>

            <div style={{ padding: '40px', fontFamily: 'sans-serif', border: '2px solid orange', maxWidth: '400px', margin: '20px' }}>
                <h1>Zustand Demo</h1>
                <BearCounter />
                <Controls />
            </div>



        </div>
    )
}

export default ZustandDemo;