import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  console.log("searchTerm", searchTerm);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async () => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=true&query=${searchTerm}`
      );
      console.log("zzzz리퀘", request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <div></div>;
}
