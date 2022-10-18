import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";
import App from "./app";
import Calendar from "./service/calendar";
import Library from "./service/library";
import Report from "./service/report";
import ImageFileInput from "./components/report/image_file_input/image_file_input";
import ImageUploader from "./service/image_uploader";
import Search from "./service/search";

const calendar = new Calendar();
const library = new Library();
const report = new Report();
const search = new Search();

const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWidthMiddleware(reducer)}>
      <App
        search={search}
        library={library}
        calendar={calendar}
        report={report}
        FileInput={FileInput}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
