import React from 'react'

import './Achievements.scss'
import { Title } from '../../Title/Title'
import { AchievementsCard } from './AchievementsCard/AchievementsCard'

import project1 from '../../../assets/project1.png'
import project2 from '../../../assets/project2.png'
import { Button } from '../../Button/Button'
import { AchievementsInfo } from './AchievementsInfo/AchievementsInfo'
import { BsArrowRightShort } from 'react-icons/bs'

import Typical from 'react-typical'

export const Achievements = () => {
    return (
        <div className='achievements'>
            <div className="achievements__left">
                <Title text='achievements' />
                <h1 className="achievements__left-title">
                    We Worked With {' '}
                    <Typical
                        steps={['', 1000, '100+', 1000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h1>
                <h1 className='achievements__left-title'>
                    Company Over Years {' '}
                    <Typical
                        steps={['', 1000, '10+', 1000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h1>
                <AchievementsCard
                    img={project1}
                    title='JobHub Job Finding Website'
                    descr='This website has become one of the best ux interface  for users with an beautiful ui and also lucrative fot upcoming startups in the sectors'
                />

                <Button name='View More Work' arrow={<BsArrowRightShort size={30} />} />
            </div>
            <div className="achievements__right">
                <div className="achievements__right-blog">
                    <AchievementsInfo
                        digit='9K+'
                        complete='Completed Full Projects'
                        companies='From 789+ Companies'
                    />
                    <AchievementsInfo
                        digit='924+'
                        complete='Satisfiingly Happy Clients'
                        companies='From 100+ Countries'
                    />
                    <AchievementsInfo
                        digit='416'
                        complete='Expertised  Unit Employees'
                        companies='From 20+ Countries'
                    />
                    <AchievementsInfo
                        digit='3024'
                        complete='Startups Case Studies'
                        companies='From 100+ Countries'
                    />
                </div>
                <AchievementsCard
                    img={project2}
                    title='CENT - Payment App Landing Website'
                    descr='This website has become one of the best ux interface 
                    for users with an beautiful ui and also lucrative fot 
                    upcoming startups in the sectors'
                />
            </div>
        </div>
    )
}
