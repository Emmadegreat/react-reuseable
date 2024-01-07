import React from 'react'

const Button = ({ children, color, onClick }) => {

    const buttonStyle = {
        padding: '8px 16px',
        borderRadius: '4px',
        backgroundColor: color || '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    }
    return (
        <button onClick ={onClick} style={buttonStyle}>
            {children}
        </button>
    )
}

export default Button
