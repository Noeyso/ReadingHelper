import React from "react";
import SearchCard from "../searchCard/searchCard";
import styles from "./searchList.module.css";

const SearchList = ({ books }) => {
  return (
    <ul className={styles.container}>
      {books.map((book, i) => (
        <SearchCard key={i} book={book} />
      ))}
    </ul>
  );
};

export default SearchList;
