import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Aniket here!</b> Discover my stories and ideas.{" "}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur,
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            laoreet nulla. Etiam consectetur, lectus lacinia ultricies
            dignissim, metus est interdum metus, sit amet imperdiet velit mauris
            et lacus. Vivamus purus nibh, feugiat a hendrerit at, posuere eget
            libero. Quisque pharetra neque sit amet est fringilla facilisis.
            Vivamus mauris elit, facilisis id auctor quis, tincidunt non ante.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
