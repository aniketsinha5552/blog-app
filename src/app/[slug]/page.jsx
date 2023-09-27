import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet, consectetur</h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Aniket Sinha</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur, lectus lacinia ultricies
            dignissim, metus est interdum metus, sit amet imperdiet velit mauris
            et lacus. Vivamus purus nibh, feugiat a hendrerit at, posuere eget
            </p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur, lectus lacinia ultricies</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur, lectus lacinia ultricies
            dignissim, metus est interdum metus, sit amet imperdiet velit mauris
            et lacus. Vivamus purus nibh, feugiat a hendrerit at, posuere eget
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur, lectus lacinia ultricies
            dignissim, metus est interdum metus, sit amet imperdiet velit mauris
            et lacus. Vivamus purus nibh, feugiat a hendrerit at, posuere eget
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default page