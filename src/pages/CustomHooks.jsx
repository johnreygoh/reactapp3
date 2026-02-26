import { useToggle } from '../hooks/useToggle'
import { useAdd } from '../hooks/useAdd';

function CustomHooks() {

    const [isModalOpen, toggleModal] = useToggle(false);
    const [answer, setAnswer] = useAdd({ n1: 12, n2: 34 });

    return (
        <>
            <h2>Custom Hooks</h2>
            <button onClick={setAnswer}>show answer</button>
            Answer: {answer}
            <br />
            <button onClick={toggleModal}>
                {isModalOpen ? 'Modal is open ' : 'Modal is closed'}
            </button>
        </>

    );
}
export default CustomHooks;