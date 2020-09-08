import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <div className={'header'}>
            <p>
                <Link to={'/'}>HOME</Link>
            </p>
            <p>
                <Link to={'/login'}>LOGIN</Link>
            </p>
            <p>
                <Link to={'/DashBoard'}>MAIN</Link>
            </p>
        </div>
    )
}

export default Header