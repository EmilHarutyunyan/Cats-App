import React from 'react'
import { Link } from 'react-router-dom'
import DefaultSection from '../components/DefaultSection'
const NotFound = () => {
    return (
        <DefaultSection>
            <h1>404</h1>
            <Link to="/">Go To Home</Link>
        </DefaultSection>
    )
}

export default NotFound
