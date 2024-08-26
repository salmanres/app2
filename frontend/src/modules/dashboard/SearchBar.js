import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { LuSearch } from "react-icons/lu";
import { HiMiniMicrophone } from "react-icons/hi2";
import Navbar from '../shared/Navbar';
import { Link, useParams } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 2) {
        try {
          const response = await axios.get(`http://localhost:3500/search`, {
            params: { query }
          });
          setResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setResults([]);
      }
    };

    const debounceFetch = setTimeout(fetchResults, 100);

    return () => clearTimeout(debounceFetch);
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <div className='row justify-content-center pt-5'>
          <div className='col-lg-5 col-md-5- col-sm-7 col-10 pt-5'>
            <div className="form">
              <LuSearch className="fa fa-search" />
              <input
                type="text"
                className="form-control form-input mb-2"
                placeholder="UP24ATXXXX"
                autoFocus
                maxLength={11}
                value={query}
                onChange={handleChange}
              />
              <span className="left-pan"><HiMiniMicrophone className="fa fa-microphone" /></span>
            </div>
            <div className="results">
              {results.map((result, index) => (
                <div className='result-div' key={index}>
                  <Link to={`/vehdetails/${result._id}`} className='result-link'>{result.registration}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchBar;
