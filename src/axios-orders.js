import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-673d3.firebaseio.com/",
});

export default instance;
