import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>Culture</span>
            </div>
            <Link href="/">
            <h1> Lorem ipsum dolor  sit amet sit amet</h1>
            </Link>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur, lectus lacinia ultricies
            dignissim, metus est interdum metus, sit amet imperdiet velit mauris
            </p>
            <Link className={styles.link} href="/">Read More</Link>
        </div>
    </div>
  )
}

export default Card