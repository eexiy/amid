import React from 'react'

import './AchievementsInfo.scss'

export const AchievementsInfo = ({ digit, complete, companies }) => {
  return (
    <div className='achievements__info'>
      <p>{digit}</p>
      <h3>{complete}</h3>
      <span>{companies}</span>
    </div>
  )
}
