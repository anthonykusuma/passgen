import React from "react"

const Slider = (props) => {

    const min = 10, max = 30;

    return (
        <div className="relative pt-1 my-3">
            <input
                type="range"
                className="form-range appearance-none
                w-full h-6 p-0 bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none"
                min={min}
                max={max}
                defaultValue={props.defaultValue}
                onChange={props.handleChange}
                id={props.slider}
            />
            <p className="text-gray-100 text-center text-xl">
               Password Length: <span className="font-bold">{props.defaultValue}</span>
            </p>
        </div>
    )
}

export default Slider