import React from 'react'

import "./css/Header.css"
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
    <header>
            <nav>
                <ul>
                    <li>
                        <Link className='link' to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="/about">About</Link>
                    </li>
                    <li>
                        <Link className='link' to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className='link' to="/login">log in</Link>
                    </li>
                </ul>
            </nav>
    </header>
    </>
  )
}
