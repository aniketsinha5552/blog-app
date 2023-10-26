import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${1}&cat=${""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async () => {
  const { posts } = await getData();

  return (
    <div className={styles.container}>
      {/* What's Hot */}
      <h2 className={styles.subtitle}>What&apos;s hot"</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {posts?.map(item=>{
          return (
            <Link className={styles.item} href={`/posts/${item.slug}`} key={item._id}>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>{item?.catSlug}</span>
              <h3 className={styles.postTitle}>
              {item?.title}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>{item?.user?.name}</span>
                <span className={styles.date}> - {item.createdAt.substring(0, 10)}</span>
              </div>
            </div>
            </Link>
          )
        })}
      </div>

            {/* Categories */}
            <h2 className={styles.subtitle}>Discover By Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
      </div>

      {/* Editor's Pic */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <div className={styles.items}>
        {posts?.map((item) => {
          return (
            <Link className={styles.item} href={`/posts/${item.slug}`} key={item._id}>
              {item.img && (
                <div className={styles.imgContainer}>
                  <Image src={item?.img} alt="" fill className={styles.image} />
                </div>
              )}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.travel}`}>
                  {item?.catSlug}
                </span>
                <h3 className={styles.postTitle}>
                  {item?.title}
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>{item?.user?.name}</span>
                  <span className={styles.date}> -  {item.createdAt.substring(0, 10)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>


    </div>
  );
};

export default Menu;
