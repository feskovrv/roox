import React from "react";
import './Button.scss';

const Button = ({label, func, disabled = false}) => {

    return(
        <button className="button" onClick={func} disabled={disabled}>{label}</button>
    )
}

export default Button;