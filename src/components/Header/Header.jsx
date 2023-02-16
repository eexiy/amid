import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Content } from './Content/Content'
import {Container} from '../Container/Container'

export const Header = () => {
    return (
        <div>
            <Container>
                <Navbar />
            </Container>
            <Content />
        </div>
    )
}
