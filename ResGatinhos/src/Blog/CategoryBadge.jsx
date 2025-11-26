import React from "react";
import styles from "./CategoryBadge.module.css";

export default function CategoryBadge({ category }) {
  return <span className={styles.badge}>{category}</span>;
}
