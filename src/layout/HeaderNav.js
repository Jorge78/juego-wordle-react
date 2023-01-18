import logo from '../logo.svg';
import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <div>
        <header className="App-header">
            <div className='contLogo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='contNav'>
                <div className='titulo'>
                    <h1>Portafolio</h1>
                </div>
                <div className='menu-nav'>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/inicio">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/acercade">Acerca de</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>
  )
}
