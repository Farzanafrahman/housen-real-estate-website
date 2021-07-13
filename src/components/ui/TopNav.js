import React, { useState, useEffect, fragment } from 'react';
import logo from '../../logo/housen.png'

const TopNav = () => {

  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

    const navHtml = <nav>
                <ul className='nav-links'>
                    <li>
                        <a href='#'>Buy a house</a>
                    </li>
                    <li>
                        <a href='#'>Rent a house</a>
                    </li>
                    <li>
                        <a href='#'>Mortgage</a>
                    </li>
                </ul>
            </nav>;


    return (
        <fragment>
        <header>
            <img className='logo' src={logo} alt='logo' />
            <div className="desktop-menus">{navHtml}</div>
            <button className='btn'>Sign up</button>
            <i className={`mobile-menu-icon fas fa-${isShowMobileMenu?'times':'bars'}`} onClick={()=>setIsShowMobileMenu(!isShowMobileMenu)}></i>
        </header>
        {isShowMobileMenu?<div className="mobile-menus">{navHtml}</div>:""}
        </fragment>

    )
}

export default TopNav