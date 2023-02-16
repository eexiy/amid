import React from 'react'
import './Button.scss'

export const Button = ({ name, arrow }) => {
    return (
        <>
            <button className='button'>{name}<span>{arrow}</span></button>
        </>
    )
}
