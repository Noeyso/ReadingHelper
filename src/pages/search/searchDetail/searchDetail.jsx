import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./searchDetail.module.css";
import thumbnailImg from "../../../common/images/thumbnail.png";
import RoundButton from "../../../components/common/buttons/roundButton";

const SearchDetail = ({ library }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  console.log(historyState);

  const bookItem = historyState.book;

  const book =
    bookItem === undefined
      ? JSON.parse(localStorage.getItem("book"))
      : bookItem;
  const { title, thumbnail, contents, authors, publisher, translators } = book;

  const thumbnail_img = thumbnail.length > 0 ? thumbnail : thumbnailImg;
  const author = authors.length > 0 ? authors.join(",") : "";
  const translator = translators.length > 0 ? translators.join(",") : "";

  // useEffect(() => {
  //   if (book.length) {
  //     localStorage.setItem("book", JSON.stringify(book));
  //   }
  // }, [book]);

  const saveBook = async () => {
    const isbn = book["isbn"].split(" ")[1];
    const newBook = {
      book_title: title,
      book_author: author,
      book_thumbnail: thumbnail,
      book_isbn: isbn,
      read_date: null,
      memo: "",
      user_id: 1,
    };

    const res = await library.saveBook(newBook);
    console.log(res);
    if (res) {
      alert(" 저장했습니다!");
    } else {
      alert("이미 서재에 담겼습니다!");
    }
  };

  const goToReport = () => {
    history.push({
      pathname: "/report/write",
      state: { book },
    });
  };
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.line}></div>
      <div className={styles.detail}>
        <img className={styles.thumbnail} src={thumbnail_img} alt="thumbnail" />
        <div className={styles.info}>
          <ul className={styles.maker_list}>
            {author === "" && (
              <li className={styles.author}>
                <h3 className={styles.author_title}>저자</h3>
                <p className={styles.author_name}>{author}</p>
              </li>
            )}
            {translator === "" > 0 && (
              <li className={styles.author}>
                <h3 className={styles.author_title}>역자</h3>
                <p className={styles.author_name}>{translator}</p>
              </li>
            )}
            {publisher.length > 0 && (
              <li className={styles.author}>
                <h3 className={styles.author_title}>출판사</h3>
                <p className={styles.author_name}>{publisher}</p>
              </li>
            )}
          </ul>

          <h3 className={styles.content_title}>책 내용</h3>
          <p className={styles.content}>{contents}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <RoundButton onClick={saveBook} text={"내서재에 저장"} />
        <RoundButton onClick={goToReport} text={"독후감 작성"} />
      </div>
    </section>
  );
};

export default SearchDetail;
