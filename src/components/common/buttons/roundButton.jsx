import React from "react";

export const RoundButton = ({ backColor, textColor, text, onClick }) => {
  const styles = {
    borderRadius: 5,
    padding: "0.5em",
    margin: "0.5em",
    cursor: "pointer",
    backgroundColor: backColor ? `${backColor}` : "#FDBF00",
    color: textColor ? `${textColor}` : "#ffffff",
  };
  return (
    <button style={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default RoundButton;
