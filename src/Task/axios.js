import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?q=yerevan&appid=ba8608127335c6068af01ea8e811dad7",
  timeoutErrorMessage: "Your internet is so slow",
});

export default instance;
