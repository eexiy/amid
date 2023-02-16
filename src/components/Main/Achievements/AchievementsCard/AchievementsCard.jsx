import React from 'react'

import './Achievements.scss'

export const AchievementsCard = ({ img, title, descr }) => {
    return (
        <div className='achievementsCard'>
            <img src={img} alt="" />
            <h2 className="achievementsCard__title">{title}</h2>
            <p className="achievementsCard__descr">{descr}</p>
        </div>
    )
}
