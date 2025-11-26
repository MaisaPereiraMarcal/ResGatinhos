import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Blog/Comment";
import CategoryBadge from "../Blog/CategoryBadge";
import styles from "./BlogPost.module.css";
import blogApi from "../Blog/blogApi";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    blogApi.getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p className={styles.loading}>Carregando...</p>;

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.meta}>
        <span>👤 {post.author}</span>
        <span>📅 {post.date}</span>
      </div>

      <div className={styles.badges}>
        {post.categories?.map(cat => (
          <CategoryBadge key={cat} category={cat} />
        ))}
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <h2 className={styles.commentTitle}>Comentários</h2>

      <div className={styles.comments}>
        {post.comments?.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
      </div>
    </div>
  );
}
