import React, { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const validateInput = () => {
        if (num1 === "" || num2 === "" || isNaN(num2) || isNaN(num1)) {
            setError("Please enter valid numbers.")
            return false;
        }
        setError(null)
        return true;
    }
    const add = () => {
        if (validateInput()) {
            setResult(parseFloat(num1) + parseFloat(num2))
        };
    }
    const substract = () => {
        if (validateInput()) {
            setResult(parseFloat(num1) - parseFloat(num2))
        };
    }
    const multiply = () => {
        if (validateInput()) {
            setResult(parseFloat(num1) * parseFloat(num2))
        };
    }
    const divide = () => {
        if (validateInput()) {
            if (num2 !== "0") {
                setResult(parseFloat(num1) + parseFloat(num2))
            } else {
                setError("Division by zero is not allowed.")
            }
        };
    }


    return (
        <div className="container">
            <div className="calculator">
                <h1>React Calculator</h1>
                <input type="text" placeholder="num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <input type="text" placeholder="num2" value={num2} onChange={(e) => setNum2(e.target.value)} />

                <div className="buttons-div">
                    <button onClick={add}>+</button>
                    <button onClick={substract}>-</button>
                    <button onClick={multiply}>*</button>
                    <button onClick={divide}>/</button>
                </div>
                <div className="error">{error ? (<p className="red">error:<p className="mess">{error}</p></p>)   : result !=null ? (<p className="green">success:</p>) :null}</div>
                <div className="success"> {result != null ? (<p className="mess">Result:{result}</p>) : null}</div>

            </div>
        </div>
    );
};

export default Calculator;