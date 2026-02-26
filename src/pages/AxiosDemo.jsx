import { useState, useEffect } from "react";
import axios from "axios";

function AxiosDemo() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchdata = async () => {

            await setTimeout(() => {
                axios.get("https://jsonplaceholder.typicode.com/users/")
                    .then(res => setData(res.data));
            }, 4000);
        };

        fetchdata();

    }, []);

    if (data.length <= 0) return <div style={{ padding: '20px' }}>Loading data...</div>

    return (
        <div>
            <h2>AxiosDemo</h2>
            {data.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    )
}
export default AxiosDemo;