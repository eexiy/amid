import React from 'react'
import { useSelector } from 'react-redux'

import './Companies.scss'


export const Companies = () => {

    const companies = useSelector(state => state.companies)

    return (
        <div className='companies'>
            {companies.map(company => {
                return <div key={company.id} className="companies__logo"> <img src={company.logo} alt="" /></div>
            })}
        </div>
    )
}
