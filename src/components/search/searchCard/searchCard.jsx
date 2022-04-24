import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import styles from "./searchCard.module.css";
const SearchCard = ({ book }) => {
  const history = useHistory();
  const { page } = history.location;
  const onClick = async () => {
    console.log(page);
    if (page === "report") {
      history.push({
        pathname: "/report/write",
        state: { book },
      });
    } else {
      console.log("들어옴, ", book);
      history.push({
        pathname: "/search/detail",
        state: { book },
      });
    }
  };

  const { title, thumbnail } = book;
  return (
    <li className={styles.container} onClick={onClick}>
      <div className={styles.book}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <h5>{title}</h5>
      </div>
    </li>
  );
};

export default SearchCard;
