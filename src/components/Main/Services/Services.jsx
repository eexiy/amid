import React from 'react'

import './Services.scss'
import { Title } from '../../Title/Title'
import { Card } from './Card/Card'

import { BsCreditCard, BsPaperclip } from 'react-icons/bs'
import { RxCircle } from 'react-icons/rx'

export const Services = () => {
    return (
        <div className='services'>
            <Title text='services' />
            <div className="services__info">
                <h1 className="services__info-title">
                    Exactly Everything You
                    Need For Business
                </h1>
                <p className="services__info-description">
                    We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
                </p>
            </div>
            <div className="services__card">
                <Card
                    logo={<BsCreditCard />}
                    title='Business Growing Support'
                    descr='Get every necessary support to grow as business startup'
                    color='#DBFFE9'
                />
                <Card
                    logo={<BsPaperclip color='#FF9900' />}
                    title='Community Attachment'
                    descr='A lifetime attachment with the community dreamer'
                    color='#FFF7CA'
                />
                <Card
                    logo={<RxCircle color='#FF6107' />}
                    title='Exceptional Discovery Plans'
                    descr='An exceptional plan take ahead millions of step which we discover'
                    color='#FFE9E0'
                />
            </div>
        </div>
    )
}
