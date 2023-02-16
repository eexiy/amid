import React, { useState } from 'react'

import './BlogCarousel.scss'
import { BlogCarouselCard } from './BlogCarouselCard/BlogCarouselCard'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'


export const BlogCarousel = () => {

  const { blogs } = useSelector(state => state.blogs)

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    if ((blogs.length - 2) * 590 > current)
      setCurrent(prev => prev + 590)
  }

  const prevSlide = () => {
    if (current > 0)
      setCurrent(prev => prev - 590);
  }

  return (
    <div className='blogCarousel'>
      <div className="blogCarousel__pagination">
        <button onClick={prevSlide}><AiOutlineArrowLeft size={18} /></button>
        <button onClick={nextSlide}><AiOutlineArrowRight size={18} /></button>
      </div>
      <div className="box">
        <div className="blogCarousel__card" style={{ 
          transform: `translateX(-${current}px)`,
          gridTemplateColumns: `repeat(${blogs.length},520px)`
          }}>
          {blogs.map(blog => {
            return <BlogCarouselCard
              key={blog.id}
              img={blog.img}
              title={blog.title}
              descr={blog.descr}
              day={blog.day}
              month={blog.month}
              current={current}
            />
          })}
        </div>
      </div>
    </div>
  )
}
