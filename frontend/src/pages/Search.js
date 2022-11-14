import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchButton from "../components/SearchIcon";
import SearchResults from "./SearchResults";

const url = "http://localhost:5000/api/users/";

const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const getDataFromSearch = async () => {
    const res = await axios.get(url);
    const result = await res.data;
    setResult(result);
  };

  const handleSearch = (e) => {
    const searchString = e.target.value;
    setSearch(searchString);
  };

  useEffect(() => {
    if (search != "") {
      getDataFromSearch();
      setResult([1]);
    } else {
      setResult([]);
    }
  }, [search]);

  return (
    <div className="home">
      <div className="main">
        <h3>Search</h3>
        <div className="input-group my-3 search-bar">
          <span className="input-group-text" id="basic-addon1">
            <SearchButton />
          </span>
          <input
            type="text"
            className="form-control"
            id="search-bar"
            placeholder="what do you want to listen to?"
            aria-describedby="basic-addon1"
            onChange={handleSearch}
          />
        </div>
        <h3>Results</h3>
        <div className="search-results">
          {result.length == 0 ? "No results found" : <SearchResults />}
        </div>
      </div>
    </div>
  );
};
export default Search;
