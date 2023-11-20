import React from "react";
import styles from "./PrettySpinner.module.css";

export default function PrettySpinner() {
  return (
    <div className={styles.ldsCircle}>
      <div></div>
    </div>
  );
}
