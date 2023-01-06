import { Book } from "./search.d";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type SearchState={
  loading:boolean;
  data:Book[];
  error:Error | null;
}

const initialState:SearchState={
  loading:false,
  data: [],
  error:null
}

const searchInstance = axios.create({
  headers: {
    "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID!,
    "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SERVER!
  }
});

export const searchBook = createAsyncThunk(
  "SEARCH_BOOK",
  async (query: string) => {
    const response = await searchInstance.get("/v1/search/book.json", {
      params: { query }
    });
    console.log("search result is ...");
    console.log(response);
    return response.data.items as Book[];
  }
);

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchBook.pending,(state,action)=>{
      return {...state,loading:true}
    });
    builder.addCase(searchBook.fulfilled, (state, action) => {
      return { ...state, loading:false, data: action.payload };
    });
  }
});

export default search.reducer;
