import React from "react";
import { Book } from "../../slices/search.d";
import styles from "./Search.module.scss";
import SearchCard from "./SearchCard";

type Props={
  booklist:Book[];
}

const SearchList = ({booklist}:Props) => {
  return (
    <div>
      <ul className={styles.booklist}>
        {booklist.map((book, i) => (
          <SearchCard key={i} book={book} />
        ))}
      </ul>
      <div className={styles.move_page}>
        <button className={styles.btn}>
          <img className={styles.btn_img} src={''} alt="left" />
        </button>
        <h2 className={styles.page}>{"page"}</h2>
        <button className={styles.btn}>
          <img className={styles.btn_img} src={''} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default SearchList;
