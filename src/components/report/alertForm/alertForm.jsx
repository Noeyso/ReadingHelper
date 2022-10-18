import React from "react";
import styles from "./alertForm.module.css";

const AlertForm = ({ closeAlert }) => {
  return (
    <div className={styles.container}>
      <section className={styles.alert}>
        <h2>정말로 독후감을 삭제하시겠어요?</h2>
        <div className={styles.btns}>
          <button
            className={`${styles.btn} ${styles.yes}`}
            onClick={() => closeAlert(true)}
          >
            독후감 삭제
          </button>
          <button
            className={`${styles.btn} ${styles.no}`}
            onClick={() => closeAlert(false)}
          >
            취소
          </button>
        </div>
      </section>
    </div>
  );
};
export default AlertForm;
