import axios from "axios";
import api from "../api";
class Report {
  async loadReport() {
    const response = await api.get("/report");
    console.log(response.data);
    return response;
  }
  async saveReport(book) {
    console.log(book);
    try {
      const response = await api.post("/report", book);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
  async deleteReport(reportId) {
    console.log(reportId);
    try {
      const response = await api.delete("/report", { data: { reportId } });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
}

export default Report;
