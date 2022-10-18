import React, { useState, useRef, useEffect } from "react";
import styles from "./calendarDetail.module.css";
import HoverButton from "../../common/buttons/hoverButton/hoverButton";
import Close from "../../../common/images/closeBlack.png";
const CalendarDetail = ({ book, calendar, openDetail, library }) => {
  const inputRef = useRef();
  const { id, book_title, book_thumbnail, book_isbn, memo } = book;
  const [isWrite, setIsWrite] = useState(false);
  const [calendarMemo, setCalendarMemo] = useState("");

  useEffect(() => {
    setCalendarMemo(memo);
  }, [memo]);

  const writeMemo = async () => {
    setIsWrite(true);
  };
  const addMemo = async (event) => {
    event.preventDefault();
    setIsWrite(false);
    await calendar.saveMemo(book_isbn, calendarMemo);
  };
  const deleteMemo = async () => {
    await library.saveCalendar(book_isbn, null);
  };
  const onChange = (event) => {
    setCalendarMemo(event.target.value);
  };
  return (
    <section className={styles.container}>
      <button className={styles.closeBtn} onClick={() => openDetail(book, id)}>
        <img className={styles.close} src={Close} alt="close" />
      </button>
      <img className={styles.thumbnail} src={book_thumbnail} alt="thumbnail" />
      <h5>{book_title}</h5>
      {isWrite ? (
        <form className={styles.form}>
          <textarea
            className={styles.review}
            ref={inputRef}
            placeholder="메모를 입력해주세요!"
            value={calendarMemo}
            onChange={onChange}
          />
          <input
            className={styles.submit}
            type="submit"
            value={"작성하기"}
            onClick={addMemo}
          />
        </form>
      ) : (
        <div className={styles.memo}>
          <p>{calendarMemo}</p>
          {calendarMemo !== "" ? (
            <HoverButton text="수정하기" onClick={writeMemo} />
          ) : (
            <HoverButton text="메모 추가하기" onClick={writeMemo} />
          )}
        </div>
      )}
      <HoverButton text="삭제하기" textColor="red" onClick={deleteMemo} />
    </section>
  );
};

export default CalendarDetail;
