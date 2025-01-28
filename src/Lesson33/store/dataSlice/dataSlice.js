import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersData } from "./api";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: [],
    errorMessage: "",
  },
  reducers: {
    getData(state, action) {
      return (state = action.payload);
    },
  },
  selectors: {
    getData: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(fetchUsersData.rejected, (state, action) => {
      state.errorMessage = action.error.message;
      state.loading = true;
      state.data = [];
    });
    // builder.addCase(fetchUsersData.rejected, () => {
    //   console.log("es inch error");
    // });
  },
});

export const dataReducer = dataSlice.reducer;
export const { getData } = dataSlice.selectors;
