import React from 'react'

const Card = ({ children, title }) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 0',
    }

    return (
        <div style={cardStyle}>
            {title && <h3>{title}</h3>}
           <div> {children}</div>
        </div>
    )
}

export default Card
