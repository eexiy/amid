import React from 'react'
import girl from '../../../assets/content-img.png'
import circle from '../../../assets/content-circle.png'

import './Content.scss'
import { Title } from '../../Title/Title'
import { Container } from '../../Container/Container'
import { Button } from '../../Button/Button'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { ContentPoster } from './ContentPoster/ContentPoster'

export const Content = () => {
  return (
    <div className='header'>
      <Container>
        <div className='content'>
          <div className="content__left">
            <Title text='it works!' />
            <h1 className="content__left-title">
              Try Our Business Ideas to grow Rapidly
            </h1>
            <p className="content__left-description">
              We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
            </p>
            <div className='content__left-btns'>
              <Button name='Get Started' />
              <button className='content__left-btn'><AiOutlinePlayCircle size={40} /> DEMO VIDEO</button>
            </div>
          </div>
          <div className="content__right">
            <img className='content__right-img' src={girl} alt="" />
            <img className='content__right-circle' src={circle} alt="" />
            <div className="content__right-poster">
              <ContentPoster />
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}
