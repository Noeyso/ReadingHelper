import axios from "axios";
import api from "../api";
class Library {
  async loadLibrary() {
    const response = await api.get("/library");
    console.log(response.data);
    return response;
  }
  async saveBook(book) {
    console.log(book);
    try {
      const response = await api.post("/library", book);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
  async deleteBook(bookId) {
    console.log(bookId);
    try {
      const response = await api.delete("/library", { data: { bookId } });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
  async saveCalendar(isbn, date) {
    console.log(isbn);

    try {
      const response = await api.put("/library", { isbn, date });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
}

export default Library;
