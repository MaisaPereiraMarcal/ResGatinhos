import React, { useState } from "react";
import styles from "./Editor.module.css";
import blogApi from "./blogApi";
import { useNavigate } from "react-router-dom";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await blogApi.createPost({
        title,
        content,
        categories: categories.split(",").map(c => c.trim()),
        author: "Admin",
        date: new Date().toLocaleDateString(),
        comments: []
      });

      navigate("/blog");
    } catch (err) {
      alert("Erro ao publicar.");
    }
  }

  return (
    <div className={styles.editorWrap}>
      <input
        className={styles.titleInput}
        placeholder="Título do post..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        className={styles.categoryInput}
        placeholder="Categorias (separadas por vírgula)"
        value={categories}
        onChange={e => setCategories(e.target.value)}
      />

      <textarea
        className={styles.editor}
        placeholder="Digite o texto aqui..."
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button className={styles.publishBtn} onClick={handleSubmit}>
        Publicar
      </button>
    </div>
  );
}
