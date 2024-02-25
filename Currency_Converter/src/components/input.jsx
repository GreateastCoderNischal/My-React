import React from "react";

function Input(
    {
        label,
        amount,
        onAmount,
        onCurrency,
        currencyOptions = [],
        selectedCurrency = "usd",
        Function_
    })
{

   
    return (
        <div className="bg-white rounded-lg shadow flex text-sm p-3 m-3">
            <div className="w-1-2">
                <label className="font-semibold">{label}</label>
                <input className="w-full outline-none p-1" placeholder="Amount" type="Number" value={amount}
                    onChange={(e) => {
                        onAmount(e.target.value)
                        Function_()
                        
                    }}
                />
            </div>
            <div className="w-1-2">
                <label>Currency Type</label>
                <select name="" id=""
                    className="outline-none p-1 w-full bg-slate-400"
                    value={selectedCurrency}
                    onChange={(e) => onCurrency(e.target.value)}
                >
                    {currencyOptions.map(currency => (
                        <option key={currency} value={currency} >{currency}</option>
                    ))}

                </select>
            </div>
        </div>
    )
}
export default Input