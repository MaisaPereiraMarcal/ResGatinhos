import React from "react";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <img src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${comment.author}`} alt="" />

      <div>
        <strong>{comment.author}</strong>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}
