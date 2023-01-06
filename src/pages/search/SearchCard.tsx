import React from "react";
import { useHistory } from "react-router";
import { Book } from "../../slices/search.d";
import styles from "./Search.module.scss";

type Props={
  book:Book;
}
const SearchCard = ({book}:Props) => {
  const history = useHistory();
  // const { page } = history.location;
  /*
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
*/

  const { title, image } = book;
  const cutTitle = title.length>24?`${title.substring(0,24)}...`:title;
  
  return (
    <li className={styles.book} >
      <div className={styles.thumbnail}>
        <img src={image ? image : ''} alt="thumbnail" />
      </div>
      <h5>{cutTitle}</h5>
    </li>
  );
};

export default SearchCard;
