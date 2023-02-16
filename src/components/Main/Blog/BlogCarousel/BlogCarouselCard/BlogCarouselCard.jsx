import React from 'react'

import './BlogCarouselCard.scss'
import { Button } from '../../../../Button/Button'

import { BsArrowRightShort } from 'react-icons/bs'

export const BlogCarouselCard = ({ img, title, descr, day, month }) => {
  return (
    <div className="blogCarouselCard">
      <div className="blogCarouselCard__date">
        <p className="blogCarouselCard__date-day">{day}</p>
        <p className="blogCarouselCard__date-month">{month}</p>
      </div>
      <img src={img} alt="" />
      <h2 className='blogCarouselCard__title' >{title}</h2>
      <p className='blogCarouselCard__descr' >{descr}</p>
      <Button name='Learn More' arrow={<BsArrowRightShort size={30} />} />
    </div>
  )
}
