import React from "react"

const Slider = (props) => {

    const min = 10, max = 30;

    return (
        <div class="relative pt-1">
            <input
                type="range"
                class="form-range appearance-none  w-full h-6 p-0 bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none"
                min={min}
                max={max}
                defaultValue={props.defaultValue}
                onChange={props.handleChange}
                id={props.slider}
            />
        </div>
    )
}

export default Slider