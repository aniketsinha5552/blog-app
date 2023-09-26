import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
         <Link href="/bolg?cat=style" className={`${styles.category} ${styles.style}`}>
           <Image src='/style.png' alt='' width={32} height={32} className={styles.image}/>
           style
         </Link>
         <Link href="/bolg?cat=coding" className={`${styles.category} ${styles.coding}`}>
           <Image src='/coding.png' alt='' width={32} height={32} className={styles.image}/>
           coding
         </Link>
         <Link href="/bolg?cat=culture" className={`${styles.category} ${styles.culture}`}>
           <Image src='/culture.png' alt='' width={32} height={32} className={styles.image}/>
           culture
         </Link>
         <Link href="/bolg?cat=food" className={`${styles.category} ${styles.travel}`}>
           <Image src='/food.png' alt='' width={32} height={32} className={styles.image}/>
           travel
         </Link>
         <Link href="/bolg?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
           <Image src='/fashion.png' alt='' width={32} height={32} className={styles.image}/>
           fashion
         </Link>
         <Link href="/bolg?cat=food" className={`${styles.category} ${styles.food}`}>
           <Image src='/food.png' alt='' width={32} height={32} className={styles.image}/>
           food
         </Link>
      </div>
    </div>
  )
}

export default CategoryList