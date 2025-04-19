import React from 'react'

const Button = ({ label, outline, type }) => {

    return (
        <button
            type={type}
            className={`${outline ? "border-2 border-green-700 text-black" : "bg-green-600"} w-32  p-2 rounded-lg text-white`}>
            {label}
        </button>
    )
}

export default Button