import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async() => {
  const slug = "conways-way-of-life";
  const data = await getData(slug);
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
          <div className={styles.postDesc}  dangerouslySetInnerHTML={{__html:data?.desc?.substring(0,300)}} />
        
          <Link href={`/posts/${slug}`} className={styles.link}>
          <button className={styles.button}>Read More</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
