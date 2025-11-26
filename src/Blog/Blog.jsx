import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import blogApi from "./blogApi";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    blogApi.getPosts().then(setPosts);
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>

      <div className={styles.postsGrid}>
        {posts.map(post => (
          <div
            key={post.id}
            className={styles.postCard}
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 150)}...</p>

            <div className={styles.tags}>
              {post.categories.map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
