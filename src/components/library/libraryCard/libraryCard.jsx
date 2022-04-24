import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Dots from "../../../common/images/dots.png";
import Close from "../../../common/images/close.png";
import styles from "./libraryCard.module.css";
const LibraryCard = ({ book, isOpen, deleteBook, search, openAlert }) => {
  const history = useHistory();
  const { page } = history.location;
  const [clicked, setClicked] = useState(false);

  const onClick = async () => {
    console.log(page);
    if (page === "report") {
      history.push({
        pathname: "/report/write",
        state: { book },
      });
    } else {
      openAlert(book);
      /*
      await kakaoSearch
        .search(book.book_isbn, 1) //
        .then((books) => {
          const tmp = books.data.documents[0];
          console.log(tmp);
          history.push({
            pathname: "/library/detail",
            state: { book: tmp },
          });
        });
			*/
    }
  };

  const { book_title, book_thumbnail } = book;
  return (
    <li className={styles.container} onClick={onClick}>
      <div className={styles.book}>
        <img src={book_thumbnail} alt="" />
        <h5>{book_title}</h5>
      </div>
    </li>
  );
};

export default LibraryCard;
