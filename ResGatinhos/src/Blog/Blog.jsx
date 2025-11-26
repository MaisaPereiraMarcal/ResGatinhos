import React, { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import styles from "./Blog.module.css";
import blogApi from "../Blog/blogApi";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    blogApi.getPosts().then(setPosts);
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>Blog & Notícias</h1>

      <div className={styles.postsGrid}>
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
