import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async()=>{
  let res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store",
  });
  if(!res.ok){
    throw new Error("Failed")
  }

  let data= await res.json()
  return data.categories
}

const CategoryList = async() => {

  const data= await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((cat)=>{
          return(
            <Link href={`/blog?cat=${cat.title}`} className={`${styles.category} ${styles[cat.slug]}`} key={cat._id}>
              {cat.img && <Image src={cat.img} alt='' width={32} height={32} className={styles.image}/>}
               {cat.title}
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default CategoryList