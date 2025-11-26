import React from "react";
// Importar PropTypes para validação (Adiciona robustez)
import PropTypes from "prop-types"; 
import styles from "./CategoryBadge.module.css";

// Função utilitária para normalizar a categoria para a classe CSS
// Ex: "Tecnologia e TI" -> "tecnologia-e-ti"
const normalizeCategory = (category) => {
  if (!category) return "";
  return category
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-'); // Troca espaços por hífens
};

export default function CategoryBadge({ category }) {
  // Se a categoria for nula, vazia ou undefined, não renderiza nada
  if (!category) {
    return null;
  }

  // Gera a classe CSS específica para a categoria (ex: "badge-tecnologia")
  const categoryClass = normalizeCategory(category);
  
  // Combina as classes: a base (.badge) e a específica (.badge-tecnologia)
  const classNames = `${styles.badge} ${styles[`badge-${categoryClass}`] || ''}`.trim();

  return <span className={classNames}>{category}</span>;
}

// 2. Adicionando PropTypes para validação
CategoryBadge.propTypes = {
  category: PropTypes.string.isRequired,
};