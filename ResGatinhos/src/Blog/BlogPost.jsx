import React, { useEffect, useState } from "react";
import styles from "./BlogPost.module.css";
import blogApi from "./blogApi";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    blogApi.getPost(id).then(setPost);
  }, [id]);

  if (!post) return <h1>Carregando...</h1>;

  function sendComment() {
    blogApi.addComment(post.id, {
      author: "Visitante",
      text: comment,
      date: new Date().toLocaleString()
    });
    setComment("");
    alert("Comentário enviado!");
  }

  return (
    <div className={styles.postWrap}>
      <h1>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.content}>{post.content}</div>

      <h3>Comentários</h3>

      <div className={styles.commentSection}>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Escreva um comentário..."
        />

        <button onClick={sendComment}>Enviar</button>
      </div>
    </div>
  );
}
