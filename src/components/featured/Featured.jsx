import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts/${"all-about-techblog"}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async() => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Aniket here!</b> Discover my stories and ideas.{" "}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={data?.img} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            {data?.title}
          </h1>
          <div className={styles.postDesc}  dangerouslySetInnerHTML={{__html:data?.desc}} />
        
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
