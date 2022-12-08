import React from 'react'
import styles from '../styles/components/Nav.module.css'

function Nav() {
  return (
    <div className={styles.navMainDiv}>
      <div className={styles.logo}>
        AppPão
      </div>
      <div className={styles.username}>
      </div>
    </div>
  )
}

export default Nav