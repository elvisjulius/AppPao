import React from 'react'
import styles from '../styles/components/Nav.module.css'

function Nav() {
  return (
    <div className={styles.navMainDiv}>
      <div>
        logo
      </div>
      <div className={styles.username}>
        Username
      </div>
    </div>
  )
}

export default Nav