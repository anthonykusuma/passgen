import React from "react";

const Toggle = (props) => {

    return (
        <div className="p-3">
            <div className="form-check form-switch">
                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-6 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                    type="checkbox"
                    role="switch"
                    checked={props.checked}
                    id={props.id}
                    onChange={props.handleChange}
                    disabled={props.disabled} />
                <label className="form-check-label inline-block ml-2 text-gray-100" htmlFor={props.id}>{props.name}</label>
            </div>
        </div>
        
    )
}

export default Toggle