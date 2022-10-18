import React, { useState } from "react";
import styles from "./app.module.css";
import { useHistory } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendar from "./pages/calendar/calendar";
import Home from "./pages/home/home";
import Library from "./pages/library/library";
import Report from "./pages/report/report";
import Header from "./components/header/header";
import SearchResult from "./pages/search/search";
import Login from "./pages/login/login";
import Join from "./pages/join/join";
import Profile from "./pages/profile/profile";
import ProfileEdit from "./pages/profile/profileEdit";
import SocialLogin from "./components/socialLogin/socialLogin";
import WriteReport from "./pages/report/writeReport/writeReport";
import LibraryDetail from "./pages/library/libraryDetail/libraryDetail";
import SearchDetail from "./pages/search/searchDetail/searchDetail";
import ReportDetail from "./pages/report/reportDetail/reportDetail";

const App = ({ search, library, calendar, report, FileInput }) => {
  //검색어, 검색 결과 책들
  const [word, setWord] = useState("");
  const [books, setBooks] = useState([]);

  const onSearch = async (query, page) => {
    setWord(query);
    await search
      .searchBook(query, page) //
      .then((books) => {
        console.log(books);
        setBooks(books.data.documents);
      });
  };
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header className={styles.header} onSearch={onSearch} />
        <div className={styles.pages}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/library">
              <Library library={library} search={search} />
            </Route>
            <Route exact path="/report">
              <Report report={report} />
            </Route>
            <Route exact path="/report/write">
              <WriteReport report={report} FileInput={FileInput} />
            </Route>
            <Route exact path="/calendar">
              <Calendar calendar={calendar} library={library} />
            </Route>
            <Route exact path="/search">
              <SearchResult query={word} books={books} onSearch={onSearch} />
            </Route>
            <Route exact path="/search/detail">
              <SearchDetail library={library} />
            </Route>
            <Route exact path="/library/detail">
              <LibraryDetail library={library} />
            </Route>
            <Route exact path="/report/detail">
              <ReportDetail search={search} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route
              path="/login/callback/naver/"
              render={() => <SocialLogin type="naver" />}
            />
            <Route
              path="/login/callback/kakao/"
              render={() => <SocialLogin type="kakao" />}
            />
            <Route exact path="/join">
              <Join />
            </Route>
            <Route exact path="/profile" render={() => <Profile />} />
            <Route exact path="/profile/edit" render={() => <ProfileEdit />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
