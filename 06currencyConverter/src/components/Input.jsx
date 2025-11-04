import React, {useId} from "react";


function InputBox({
    label,
    amount,
    onAmountChange, // wehnever user changes amount we call this function 
    onCurrencyChange, // whenever user changes currency we call this function
    currencyOptions = [], //we pass empty array as default value
    selectedCurrency = "usd", // we pass usd as default value
    amountDisabled = false,
    currencyDisabled = false, 
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled= {amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && 
                        onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && 
                        onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}    
                >
                    {currencyOptions.map((demo) => (
                     <option 
                    key={demo} value=
                     {demo}>
                     {demo}  
                     </option>   
                    ))}
                        
                </select>
            </div>
        </div>
    );
}
       
export default InputBox;
