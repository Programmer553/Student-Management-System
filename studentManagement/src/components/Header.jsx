import styles from './Header.module.css';

import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className={styles.header}>
            
            <a className="navbar-brand" href="#">Student Management System</a>
        </nav>
    </header>
  )
}

export default Header
