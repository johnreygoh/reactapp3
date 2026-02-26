import { useState, useEffect } from "react";

function FetchDemo() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(x => setData(x));
    }, []);

    return (
        <div>
            <h2>Fetch Demo</h2>
            {data.map(user => (
                <>
                    <span key={user.id}>{user.name}</span><br />
                </>
            ))}
        </div>
    );
}

export default FetchDemo;