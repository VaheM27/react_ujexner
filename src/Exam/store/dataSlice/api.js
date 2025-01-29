import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async (city) => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
  );
  const json = await result.json();
  return json;
});
