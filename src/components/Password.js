import React from "react";
import { DuplicateIcon } from "@heroicons/react/outline";
import { ToastContainer, Slide, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Password = (props) => {

    
    function copyPassword() {
        navigator.clipboard.writeText(props.password);
        toast("🔑 Password copied!")
    }

    return(
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-4 pr-12 sm:text-med border-gray-300 rounded-md"
            placeholder="password"
            value={props.password}
            readOnly={true}
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                    type="button"
                    onClick={copyPassword}
                    className="inline-block px-3 py-2 uppercase rounded
                    hover:bg-gray-100 
                    focus:bg-gray-100 focus:outline-none focus:ring-0 
                    transition duration-150 ease-in-out">
                    <DuplicateIcon className="h-6 w-6 text-blue-500 inline-block" />
                </button>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide} />
        </div>
    )
}

export default Password