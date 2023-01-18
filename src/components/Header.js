import logo from '../logo.svg';
import React from 'react'

export const Header = () => {
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

            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
