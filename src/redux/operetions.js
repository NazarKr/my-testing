import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64008f7063e89b0913b1bd9b.mockapi.io/users";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/", {
        params: {
          page: 1,
          limit: 3,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addDisplayedItems = createAsyncThunk(
  "users/addDisplayedItems",
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get("/", {
        params: {
          page: currentPage,
          limit: 3,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteFollower = createAsyncThunk(
  "users/deleteFollower",
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/${id}` );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addFollower = createAsyncThunk(
  "users/addFollower",
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);