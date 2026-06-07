import {useState} from "react";

function OnChange(){
    const [name, setName] = useState("Guest");
    const [value, setValue] = useState(0);
    const [payment, setPayment] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    function HandleValueChange(event){
        setValue(event.target.value);
    }

    function HandlePaymentChange(event){
        setPayment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleChange} />
            <p>Name: {name}</p>
            <input value={value} onChange={HandleValueChange} type="number" />
            <p>Value: {value}</p>

            <select value={payment} onChange={HandlePaymentChange}>
                <option value="">Select a payment method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="cash">Cash</option>
            </select>
            <p>Payment: {payment}</p>

        </div>
    );
}


export default OnChange;