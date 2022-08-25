import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a90a2c9d75501f75bc8280511b21ae75",
    language: "ko-KR",
  },
});

export default instance;
