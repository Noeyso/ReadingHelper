import React from "react";
import styles from "./Search.module.scss";
import arrowRight from "../../common/images/arrow_right.png";
import arrowLeft from "../../common/images/arrow_left.png";
import SearchList from "./SearchList";
import { useAppSelector } from "../../hooks";
import tokki from '../../common/images/tokki.png';
import { useHistory, useLocation } from "react-router-dom";


const SearchResult = () => {
  // const [bookTitle, setBookTitle] = useState(query);
  const loc = useLocation<{query:string}>();
  const {query} = loc.state;

  const {data} = useAppSelector(state=>state.searchReducer);

  React.useEffect(()=>{
    console.log(query);
  },[query]);

  return (
    <section className={styles.container}>
        <div>
          <h3>{`\'${query}\' 검색 결과`}</h3>
        </div>
        <div>
          {
            data.length?<SearchList booklist={data} />:
            <div className={styles.tokki_says}>
              <img src={tokki} alt="tokki" />
              <p>검색 결과가 없습니다.</p>
            </div>
          }
        </div>
    </section>
  );
};

export default SearchResult;
