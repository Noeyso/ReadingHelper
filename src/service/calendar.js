import api from "../api";
class Calendar {
  async loadCalendar(firstDay, lastDay) {
    const response = await api.get("/calendar", {
      params: { firstDay, lastDay },
    });
    return response;
  }

  async saveMemo(isbn, memo) {
    console.log(isbn);
    try {
      const response = await api.put("/calendar", { isbn, memo });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
}

export default Calendar;
