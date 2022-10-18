import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import RoundButton from "../../../components/common/buttons/roundButton";
import styles from "./writeReport.module.css";
import { BsBookFill, BsBook } from "react-icons/bs";
import Thumbnail from "../../../common/images/thum.png";
const WriteReport = ({ report, FileInput }) => {
  const history = useHistory();
  const inputRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const titleRef = useRef();
  const bookRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const historyState = history?.location?.state;
  const book = historyState !== undefined ? historyState.book : null;
  const ratings = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(0);
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const [title, setTitle] = useState(
    book !== null
      ? book.title !== undefined
        ? book.title
        : book.book_title
      : ""
  );
  const [author, setAuthor] = useState(
    book !== null
      ? book.authors !== undefined
        ? book.authors
        : book.book_author
      : ""
  );
  const [thumbnail, setThumbnail] = useState(
    book !== null
      ? book.thumbnail !== undefined
        ? book.thumbnail
        : book.book_thumbnail
      : ""
  );
  const [isbn, setIsbn] = useState(
    book !== null ? (book.isbn !== undefined ? book.isbn : book.book_isbn) : ""
  );

  const goToLibrary = () => {
    alert("Library");
    history.push({
      pathname: "/library",
      page: "report",
    });
  };
  const goToSearch = () => {
    alert("Search");
    history.push({
      pathname: "/search",
      page: "report",
    });
  };

  const onFileChange = (file) => {
    console.log(file);
    setThumbnail(file.url);
  };

  const submitReport = async (event) => {
    event.preventDefault();

    let tags = hashArr[0];
    console.log(tags);
    for (let i = 1; i < hashArr.length; i++) {
      tags = tags.concat(",", hashArr[i]);
    }
    console.log(`tags: ${tags}`);
    console.log(tags);

    let reportTitle = titleRef.current.value;
    let reportAuthor = authorRef.current.value;
    let reportContent = contentRef.current.value;
    let startDate = startRef.current.value;
    let endDate = endRef.current.value;
    let bookTitle = bookRef.current.value;

    reportAuthor = reportAuthor ? reportAuthor : "작가미상";
    const day = new Date();
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();

    startDate = startDate
      ? startDate
      : `${year}-${month >= 10 ? month : `0${month}`}-${
          date >= 10 ? date : `0${date}`
        }`;
    endDate = endDate
      ? endDate
      : `${year}-${month >= 10 ? month : `0${month}`}-${
          date >= 10 ? date : `0${date}`
        }`;

    if (reportTitle.length == 0) {
      alert("독후감 제목을 입력하세요");
      return;
    } else if (reportContent.length == 0) {
      alert("독후감 내용을 입력하세요");
      return;
    }

    const newBook = {
      title: reportTitle,
      author: reportAuthor,
      content: reportContent,
      book_title: bookTitle ? bookTitle : title,
      book_thumbnail: thumbnail ? thumbnail : Thumbnail,
      book_isbn: isbn,
      start_date: startDate,
      end_date: endDate,
      rate: rate,
      tags: tags,
      user_id: 1,
    };
    console.log(newBook);
    try {
      const res = await report.saveReport(newBook);
      //report.saveReport(newBook);
      alert(" 저장했습니다!");
      history.push({
        pathname: "/report",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      hashArr.push(hashtag);
      setHashtag("");
    }
  };

  const handleHashChange = (event) => {
    setHashtag(event.target.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        {thumbnail !== "" ? (
          <div className={styles.bookInfo}>
            <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" />
          </div>
        ) : (
          <div className={styles.buttons}>
            <RoundButton text="내서재에서 가져오기" onClick={goToLibrary} />
            <RoundButton text="검색하기" onClick={goToSearch} />
            <FileInput onFileChange={onFileChange} />
          </div>
        )}
      </div>

      <div>
        <form className={styles.form}>
          <div className={styles.title_container}>
            <div className={styles.title}>
              <h5>제목</h5>
              <input ref={titleRef} placeholder="제목을 입력하세요" />
            </div>
            <div className={styles.author_container}>
              <div className={styles.book_title}>
                <h5>책</h5>
                <input
                  ref={bookRef}
                  defaultValue={title}
                  placeholder="책 제목 입력"
                />
              </div>
              <div>
                <h5>작가</h5>
                <input
                  defaultValue={author}
                  ref={authorRef}
                  placeholder="작가명 입력"
                />
              </div>
            </div>
          </div>

          <div className={styles.reviewWrapper}>
            <textarea
              className={styles.review}
              ref={contentRef}
              placeholder="감상평을 입력해주세요"
            />
          </div>

          <div className={styles.additionInfo}>
            <div>
              <h5>읽은 기간</h5>
              <div className={styles.date}>
                <p>
                  <input ref={startRef} type="date" />
                </p>
                <span>&nbsp; ~ &nbsp;</span>

                <p>
                  <input ref={endRef} type="date" />
                </p>
              </div>
            </div>
            <div>
              <h5>별점</h5>
              <div>
                {ratings.map((ra) => {
                  return (
                    <button type="button" onClick={() => setRate(ra)}>
                      {ra <= rate ? <BsBookFill color="#D9B5FF" /> : <BsBook />}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <h5>태그</h5>
              <div>
                <div className={styles.hashText}>
                  {hashArr.map((ht, i) => (
                    <span
                      className={styles.tag}
                      onClick={() => {
                        const filtered = hashArr.filter((val, idx) => {
                          return idx !== i;
                        });
                        setHashArr(filtered);
                      }}
                    >
                      {ht}
                    </span>
                  ))}
                </div>
                <input
                  ref={inputRef}
                  className={styles.hashInput}
                  type="text"
                  value={hashtag}
                  onChange={handleHashChange}
                  onKeyPress={onKeyPress}
                  placeholder="해시태그 입력"
                />
              </div>
            </div>
          </div>
          <input
            className={styles.submit}
            type="submit"
            value={"작성완료"}
            onClick={submitReport}
          />
        </form>
      </div>
    </section>
  );
};

export default WriteReport;
