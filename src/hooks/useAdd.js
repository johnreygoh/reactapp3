import { useState } from "react";

export function useAdd({ n1 = 0, n2 = 0 }) {

    const [result, setResult] = useState(0);
    const addme = () => {
        setResult(n1 + n2);
    }
    return [result, addme];

}