import React, { useState, useEffect } from 'react';

function AsyncFetch() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const userData = await response.json();
            setUser(userData);
        };

        fetchUser();
    }, []);

    if (!user) return <div style={{ padding: '20px' }}>Loading user...</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Async/Await Demo 1</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}

export default AsyncFetch;
