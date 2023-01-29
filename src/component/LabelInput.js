import React from "react"

function LabelInput({labelText, type, setter, defaultValue}) {
    return (
        <label>
            {labelText}:
            <input 
                onChange = {(e) => setter(e.target.value)} 
                defaultValue = {defaultValue}
                type = {type} 
                name = {type} 
                id = {type} />
        </label>
    )
}

export default LabelInput