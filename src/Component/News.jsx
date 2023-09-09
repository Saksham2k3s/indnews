import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";

function News(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("business");

  

  useEffect(() => {
    fetchData();
  }, [category,currentPage]);

  const fetchData = () => {
    
      fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=in&max=10&lang=en&page=${currentPage}&apikey=c5be328a9051812bf129d1702260fa9b&pagesize=5`)
     
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    setLoading(true);
    setCurrentPage(currentPage + 1);
    fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=in&max=10&lang=en&apikey=c5be328a9051812bf129d1702260fa9b&page=${currentPage}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const handlePrevPage = () => {
    setLoading(true);
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
      fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=in&max=10&lang=en&apikey=c5be328a9051812bf129d1702260fa9b&page=${currentPage}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
          setData(jsonData);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="container my-3">
        <h2 className="text-center my-5">IndNewss Top Headline</h2>

        {/* category buttons */}
        <div className="container-fluid">
          <div className="  d-flex  justify-content-around">
          <button
                className={`btn button sm ${
                  loading === true ? "d-none" : "d-block"
                }`}
                onClick={() => {
                  setCategory("business");
                  setLoading(true);
                }}
              >
              <i class="fa-solid fa-business-time"></i>  Buisness
              </button>
              <button
                 className={`btn button sm ${
                  loading === true ? "d-none" : "d-block"
                }`}
                onClick={() => {
                  setCategory("technology");
                  setLoading(true);
                }}
              >
              <i class="fa-solid fa-computer"></i>  Technology
              </button>
              <button
                className={`btn button sm ${
                  loading === true ? "d-none" : "d-block"
                }`}
                onClick={() => {
                  setCategory("sports");
                  setLoading(true);
                }}
              >
               <i class="fa-solid fa-medal"></i> Sports
              </button>
              <button
                 className={`btn button sm ${
                  loading === true ? "d-none" : "d-block"
                }`}
                onClick={() => {
                  setCategory("entertainment");
                  setLoading(true);
                }}
              >
               <i class="fa-solid fa-music"></i> Entertainment
              </button>
              <button
                className={`btn button sm ${
                  loading === true ? "d-none" : "d-block"
                }`}
                onClick={() => {
                  setCategory("health");
                  setLoading(true);
                }}
              >
              <i class="fa-solid fa-stethoscope"></i>  Health
              </button>
              <button
                className={`btn button sm ${
                  loading === true ? "d-none" : "d-block"
                }`}
                onClick={() => {
                  setCategory("general");
                  setLoading(true);
                }}
              >
              <i class="fa-solid fa-certificate"></i>  General
              </button>
          </div>
         
        </div>

        {loading ? (
          <Spinner mode = {props.mode} />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="row">
            {data.articles.map((val, index) => (
              <div className="col-md-4 mb-3">
                <NewsItem
                  key={index}
                  title={val.title}
                  description={val.description}
                  image={val.image}
                  source={val.url}
                />
              </div>
            ))}
          </div>
        )}
        {/* <div className=" d-flex justify-content-between">
          <button
            className={`btn button mx-5 ${
              loading === true ? "d-none" : "d-block"
            }`}
            disabled={currentPage === 1 ? true : false}
            onClick={handlePrevPage}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            className={`btn button mx-5 ${
              loading === true ? "d-none" : "d-block"
            }`}
            disabled={currentPage === 7 ? true : false}
            onClick={handleNextPage}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    </>
  );
}

export default News;
