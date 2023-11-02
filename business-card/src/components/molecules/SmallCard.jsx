import React from "react";
import styles from "./SmallCard.module.css";

export default function SmallCard({ name, job, website }) {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>{job}</p>
      <p>{website}</p>
    </div>
  );
}
