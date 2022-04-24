import React from "react";
import styles from "./hoverButton.module.css";

const HoverButton = ({ text, textColor, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ color: textColor }}
    >
      {text}
    </button>
  );
};

export default HoverButton;
