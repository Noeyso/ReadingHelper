import api from "../api";

class Search {
  async searchBook(query, page) {
    console.log(query);
    try {
      const params = {
        query: query,
        sort: "accuracy",
        page: page,
        size: 12,
      };
      console.log(params);
      const response = await api.get("/search", { params: params });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.response.data);
    }
  }
  async getEncodedUri(url) {
    try {
      const response = await api.get("/search/thumbnail", { url });
    } catch (error) {
      console.error(error.response.data);
    }
  }
}

export default Search;
