import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../common/images/search.png";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { searchBook } from "../../slices/search";


type Props = {
  getText:(text:string)=>void;
}

export default function SearchBar ({getText}:Props){
  const inputRef = useRef();
  const history = useHistory();
  const [text, setText] = useState("");
  const dispatch = useDispatch<Dispatch<any>>();
  /*
  const onKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  
  */

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    getText(e.target.value);
    setText(e.target.value)
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(`search ${text}`);
    dispatch(searchBook(text));
    history.push({
      pathname: "/search",
      state:{query:text}
    });
  };

  return (
    <header className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} placeholder="책을 검색하세요." onChange={onChange} />
        <button className={styles.button} onClick={onClick}><img src={searchIcon} alt="search" /></button>
      </form>
    </header>
  );
};