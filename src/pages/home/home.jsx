import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { useSelector } from "react-redux";
import Chat from "../Chat/chat";
import SearchBar from "../../components/header/searchBar/searchBar";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log("current user is: ", currentUser);

  return (
    <div>
      <Chat />
    </div>
  );
};

export default Home;
