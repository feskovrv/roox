import React, { useState } from "react";
import './FormField.scss';

const FormField = ({text, value, readOnly, toFormData}) => {
    const [inputValue, setValue] = useState(value)
    return (
        <label className="formField">
            <span className="formField__text">
                {text}
            </span>
            <input 
                type="text" 
                defaultValue={value} 
                readOnly={readOnly} 
                onInput={(e) => {
                    toFormData(e, text);
                    setValue(e.target.value);
                }}
                className={inputValue.length !== 0 ? '' : 'error'}
            />
        </label>
    )
}

export default FormField;