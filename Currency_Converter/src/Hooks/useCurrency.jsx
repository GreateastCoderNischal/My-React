import { useState } from "react";
import { useEffect } from "react";

function useCurrency(currency){
    const [Data,setData]=useState({})
    
    useEffect(function(){
        fetch(`
        https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
        `)
        .then(response=>response.json())
        .then(function (response) {
            setData(response[currency])
            console.log(response[currency])
        })
    },[currency])
    
    return Data
}
export default useCurrency