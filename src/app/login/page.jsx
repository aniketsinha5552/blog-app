import React from 'react'
import styles from "./loginPage.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialBtn}>Login with Google</div>
            <div className={styles.socialBtn}>Login with GitHub</div>
            <div className={styles.socialBtn}>Login with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage