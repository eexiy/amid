import React from 'react'
import { Button } from '../Button/Button'
import { BsArrowRightShort } from 'react-icons/bs'
import { Container } from '../Container/Container'

import './Footer.scss'
import { FooterNav } from './FooterNav/FooterNav'
import { NavLink } from 'react-router-dom'

import { RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx'
import { FaFacebook, FaSkype } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className="footer__top">
                    <h2 className="footer__top-title">
                        Subscribe To Our Newsletter Get The Best Offers
                    </h2>
                    <div className="footer__top-btn">
                        <p>With One Click</p>
                        <Button name='Subscribe' arrow={<BsArrowRightShort size={30} />} />
                    </div>
                </div>
                <FooterNav />
            </Container>
            <div className="footer__bottom">
                <Container>
                    <div className='footer__bottom-content'>
                        <p>All Rights Reserved @Debzui2020</p>
                        <div className="footer__bottom-socialMedia">
                            <NavLink to='http://twitter.com' target='_blank'>
                                <RxTwitterLogo size={20} color='white' />
                            </NavLink>
                            <NavLink to='http://facebook.com' target='_blank'>
                                <FaFacebook size={20} color='white' />
                            </NavLink>
                            <NavLink to='http://instagram.com' target='_blank'>
                                <RxInstagramLogo size={20} color='white' />
                            </NavLink>
                            <NavLink to='http://linkedin.com' target='_blank'>
                                <RxLinkedinLogo size={20} color='white' />
                            </NavLink>
                            <NavLink to='http://skype.com' target='_blank'>
                                <FaSkype size={20} color='white' />
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
