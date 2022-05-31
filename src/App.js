import React, { useState } from "react";
import randomize from "./utils/Helpers"
import Slider from "./components/Slider"
import Toggle from "./components/Toggle"
import Password from "./components/Password"
import { RefreshIcon } from "@heroicons/react/outline";
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

    const [password, setPassword] =  useState(randomize(passwordLength, isUpperCase, isNumber, isSymbol));

    
    
    return (
        <main className="bg-gray-800 rounded p-6 m-2 w-100 h-100 md:w-3/4 lg:w-1/2">
            <Password 
                password={password}
                />
            <Slider
                id="slider"
                defaultValue={passwordLength}
                handleChange={updatePasswordLength} />
                <div className="grid grid-cols-1 md:grid-cols-4 my-4">
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
                </div>
            <div class="flex space-x-2 justify-center">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={generatePassword}
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md 
                    hover:bg-blue-700 hover:shadow-lg 
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    active:bg-blue-800 active:shadow-lg 
                    transition duration-150 ease-in-out"
                >Generate Password 
                <RefreshIcon className="h-5 w-5 ml-2  text-gray-100 inline-block" /></button>
            </div>
        </main>
    )
}

export default App