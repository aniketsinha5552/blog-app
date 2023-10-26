"use client"
import React from 'react'
import styles from "./loginPage.module.css"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const {data,status}= useSession()
  const router = useRouter()
  if(status==="loading"){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status=="authenticated"){
      router.push("/")
  }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialBtn} onClick={()=>signIn("google")}>Login with Google</div>
            {/* <div className={styles.socialBtn} onClick={()=>signIn("github")}>Login with GitHub</div> */}
            {/* <div className={styles.socialBtn} >Login with Facebook</div> */}
        </div>
    </div>
  )
}

export default LoginPage