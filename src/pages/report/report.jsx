import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AlertForm from "../../components/report/alertForm/alertForm";
import ReportCard from "../../components/report/reportCard/reportCard";
import Add from "../../common/images/add.png";
import styles from "./report.module.css";
const Report = ({ report }) => {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [reportId, setReportId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getBooks = async () => {
      const response = await report.loadReport();
      console.log(response);
      const result = response.data;
      console.log(result);
      setBooks(result);
    };
    getBooks();
  }, []);
  const openAlert = (id) => {
    setIsOpen(true);
    setReportId(id);
  };
  const closeAlert = (isDelete) => {
    setIsOpen(false);
    if (isDelete) {
      deleteReport(reportId);
    }
  };

  const deleteReport = async (id) => {
    console.log(typeof id);
    await report.deleteReport(id);
    const response = await report.loadReport();
    console.log(response);
    const result = response.data;
    console.log(result);
    setBooks(result);
    alert("독후감이 삭제되었습니다!");
  };
  const goToWrite = () => {
    history.push({
      pathname: "/report/write",
    });
  };
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {books.map((report) => (
          <ReportCard
            report={report}
            deleteReport={deleteReport}
            openAlert={openAlert}
          />
        ))}
      </ul>
      {isOpen && <AlertForm closeAlert={closeAlert} />}
      <button onClick={goToWrite}>
        <img className={styles.add} src={Add} alt="" />
      </button>
    </div>
  );
};

export default Report;
