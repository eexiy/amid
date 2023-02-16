import React from 'react'
import { Title } from '../../Title/Title'

import './Blog.scss'
import { BlogCarousel } from './BlogCarousel/BlogCarousel'

export const Blog = () => {

    return (
        <div className='blog'>
            <div className="blog__top">
                <Title text='blog' />
                <h2 className="blog__top-title">
                    We Publish Blogs Every Week
                </h2>
                <p className="blog__top-desc">
                    We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan
                </p>
            </div>
            <BlogCarousel />
        </div>
    )
}
