import { useToggle } from '../hooks/useToggle'
import { useAdd } from '../hooks/useAdd';
import { useFetch } from '../hooks/useFetch';

function CustomHooks() {

    const [isModalOpen, toggleModal] = useToggle(false);
    const [answer, setAnswer] = useAdd({ n1: 12, n2: 34 });
    const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <>
            <h2>Custom Hooks</h2>
            <button onClick={setAnswer}>show answer</button>
            Answer: {answer}
            <br />
            <button onClick={toggleModal}>
                {isModalOpen ? 'Modal is open ' : 'Modal is closed'}
            </button>

            <p>
                {data.map(user => (
                    <>
                        <span key={user.id}>{user.name}</span><br />
                    </>
                ))}
            </p>

        </>

    );
}
export default CustomHooks;