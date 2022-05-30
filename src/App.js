import React, { useState } from "react";
import randomize from "./utils/Helpers"
import Slider from "./components/Slider"
import Toggle from "./components/Toggle"
import 'tw-elements';


function App() {
    
    const [passwordLength, setPasswordLength] = useState(15);
    const [isUpperCase, setIsUpperCase] = useState(true);
    const [isNumber, setIsNumber] = useState(true);
    const [isSymbol, setIsSymbol] = useState(true);

    const updatePasswordLength = (e) => {
        setPasswordLength(e.target.value);
    }

    const generatePassword = () => {
        setPassword(randomize(passwordLength, isUpperCase, isNumber, isSymbol));
    }

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
    }

    const [password, setPassword] =  useState(randomize(passwordLength, isUpperCase, isNumber, isSymbol));

    
    
    return (
        <main>
            <h1 class="text-8xl">{password}</h1>

            <Slider
                id="slider"
                defaultValue={passwordLength}
                handleChange={updatePasswordLength} />

            <Toggle
                id="lower-case"
                name="Lower Case"
                checked={true}
                disabled={true} />

            <Toggle
                id="upper-case"
                name="Upper Case"
                checked={isUpperCase}
                handleChange={() => setIsUpperCase(!isUpperCase)} />

            <Toggle
                id="number"
                name="Numbers"
                checked={isNumber}
                handleChange={() => setIsNumber(!isNumber)} />

            <Toggle
                id="symbol"
                name="Symbols"
                checked={isSymbol}
                handleChange={() => setIsSymbol(!isSymbol)} />

            <div class="flex space-x-2 justify-center">
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={generatePassword}
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
                hover:bg-blue-700 hover:shadow-lg 
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                active:bg-blue-800 active:shadow-lg 
                transition duration-150 ease-in-out"
            >Generate Password</button>
            </div>

            <div class="flex space-x-2 justify-center">
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={copyPassword}
                class="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
                hover:bg-blue-700 hover:shadow-lg 
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                active:bg-blue-800 active:shadow-lg 
                transition duration-150 ease-in-out"
            >Copy</button>
            </div>
                
        </main>
        
    )
}

export default App