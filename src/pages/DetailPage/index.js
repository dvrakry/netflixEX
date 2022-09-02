import axios from "../../api/axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { movieId } = useParams();
  console.log("movieId", movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log("디테일 request", request);
    }
    return fetchData();
  }, []);

  return <div>디테일 페이지</div>;
}
