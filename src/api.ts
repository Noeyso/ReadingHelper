import axios from "axios";

const URL = `/v1/search/book.json`;
const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID!,
    "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SERVER!
  }
});

export const fetchBooks = async (query: string, page = 1) => {
  try {
    const {
      data: { items, total }
    } = await instance.get(URL, {
      params: { query, display: 10 * page, start: page }
    });
  } catch (error) {
    console.log(error);
  }
};
