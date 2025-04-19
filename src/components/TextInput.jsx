import React from 'react'

const TextInput = ({ type, placeholder, className, onChange, name, value, required, checked }) => {
    return (
        <input
            required={required}
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            name={name}
            value={value}
            checked={checked}
        />
    )
}

export default TextInput