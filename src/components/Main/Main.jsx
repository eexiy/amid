import React from 'react'
import { Companies } from './Companies/Companies'
import { Container } from '../Container/Container'
import { Services } from './Services/Services'
import { Achievements } from './Achievements/Achievements'
import { Blog } from './Blog/Blog'

export const Main = () => {
    return (
        <div>
            <Container>
                <Companies />
                <Services />
                <Achievements />
                <Blog />
            </Container>
        </div>
    )
}
