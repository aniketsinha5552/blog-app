import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {

  const isLoggedIn = true;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {isLoggedIn? 
        <div className={styles.write}>
            <textarea placeholder='write a comment' className={styles.input} />
            <button className={styles.button}>Send</button>
        </div>
        : <Link href="/login">Login to write a comment</Link>}

        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Aniket Sinha</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                    laoreet nulla. Etiam consectetur, lectus lacinia ultricies
                    dignissim, metus est interdum metus, sit amet imperdiet velit mauris
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Aniket Sinha</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                    laoreet nulla. Etiam consectetur, lectus lacinia ultricies
                    dignissim, metus est interdum metus, sit amet imperdiet velit mauris
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Aniket Sinha</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                    laoreet nulla. Etiam consectetur, lectus lacinia ultricies
                    dignissim, metus est interdum metus, sit amet imperdiet velit mauris
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Aniket Sinha</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                    laoreet nulla. Etiam consectetur, lectus lacinia ultricies
                    dignissim, metus est interdum metus, sit amet imperdiet velit mauris
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments