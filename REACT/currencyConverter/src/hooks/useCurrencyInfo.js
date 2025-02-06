import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // Converting response into json format
        .then((res) => setData(res[currency])) // setting data 
    }, [currency])
        
    return data;
}

export default useCurrencyInfo