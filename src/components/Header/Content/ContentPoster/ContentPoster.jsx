import React from 'react'
import './ContentPoster.scss'

import icon1 from '../../../../assets/icons/icon1.png'
import icon2 from '../../../../assets/icons/icon2.png'
import icon3 from '../../../../assets/icons/icon3.png'
import icon4 from '../../../../assets/icons/icon4.png'

export const ContentPoster = () => {
    return (
        <div className='contentPoster'>
            <div>
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
            </div>
            <div>
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
            </div>
        </div>
    )
}
