import { useEffect , useState} from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    //the reason we use useEffect() ensures the API call runs after render and only when needed (like when currency changes). Without it, the fetch would run on every render, causing infinite loops or performance issues.

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        //just cause this data inside url is string convert it into json
        .then((res) => res.json() )
        .then((res) => setData(res[currency]) ) //whereever i wants to access obj, i dont need (.) you can use [ ]
        console.log(data);
    } , [currency])
    console.log(data);
    return data;
} 

export default useCurrencyInfo;