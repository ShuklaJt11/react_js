import React from 'react'

function Header() {
    return (
        <nav className="header">
            <div><span className="logo">Logo here</span></div>
            <div>
                <ul>
                    <li><span>Navbar Link 1</span></li>
                    <li><span>Navbar Link 2</span></li>
                    <li><span>Navbar Link 3</span></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header