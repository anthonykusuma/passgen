import React from "react";

const Toggle = (props) => {
    const toggleIcon = props.checked ? "checked" : ""

    return (
        <div class="flex justify-center">
                <div class="form-check form-switch">
                    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                        type="checkbox"
                        role="switch"
                        checked={props.checked}
                        id={props.id}
                        onChange={props.handleChange}
                        disabled={props.disabled}
 />
                    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckChecked">{props.name}</label>
                </div>
            </div>
    )
}

export default Toggle