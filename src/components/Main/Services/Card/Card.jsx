import React from 'react'

import './Card.scss'
import { Button } from '../../../Button/Button'
import { BsArrowRightShort } from 'react-icons/bs'

export const Card = ({ logo, title, descr, color }) => {
    return (
        <div className='card'>
            <span style={{ backgroundColor: color }} className='card__logo'>{logo}</span>
            <h2 className="card__title">{title}</h2>
            <p className="card__descr">{descr}</p>
            <Button name='Learn more' arrow={<BsArrowRightShort size={30} />} />
        </div>
    )
}
