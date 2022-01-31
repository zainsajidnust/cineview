import React, { useState, useEffect } from "react";
import axios from "axios";

function Details() {
  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState();
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/634649?api_key=87b82e1ce0bcea0c95a22cdc1e04617e"
      );
      console.log(response);
      setMovie(response["data"]);

      let response2 = await axios.get(
        "https://api.themoviedb.org/3/movie/634649/credits?api_key=87b82e1ce0bcea0c95a22cdc1e04617e"
      );
      let tempList = response2["data"]["cast"];
      setCast(tempList);

      let response3 = await axios.get(
        "https://api.themoviedb.org/3/movie/634649/similar?api_key=87b82e1ce0bcea0c95a22cdc1e04617e&language=en-US&page=1"
      );
      // console.log(response3["data"]["results"]);
      setSimilar(response3["data"]["results"]);

      // IMDB
      https: var options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/get-ratings",
        params: { tconst: response["data"].imdb_id },
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "b75feabe7amsh7968ce5c937d81fp1b1941jsn4ef5570d14f1",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setRating(response["data"].rating);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="row m-0">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card mt-5 mx-4"
            style={{
              width: "auto",
              backgroundColor: "#1B1F23",
            }}
          >
            <img
              className="card-img-top"
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt="Card image cap"
            ></img>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-4">
          <h1 className="mt-5">{movie.title}</h1>
          <div className="d-flex align-items-center">
            <img
              src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png"
              alt=""
              width={"8%"}
            />
            <i class="bi bi-star-fill mx-2"></i>
            <p className="d-inline m-0 fs-4 b">{rating}</p>
          </div>
          <small className="me-2">{movie.release_date?.substring(0, 4)}</small>
          <small>|</small>
          {/* <small className="ms-2">{movie.genres?[0]}</small> */}
          {/* Omar */}
          {/* <small className="me-2">{movie.release_date.substring(0, 4)}</small>
          <small>|</small>
          <small className="ms-2">{movie.genres[0]}</small>
          <small>{movie.genres?.slice(1).map((k) => ", " + k)}</small> */}

          {/* Zain */}
          {/* {movie.genres?.map((e) => (
            <small>{e.name}</small>
          ))} */}
          <p className="plot mt-4 fs-5">{movie.overview}</p>
          <h2 className="mb-3">Cast</h2>
          {cast.slice(0, 3).map((actor) => (
            <h5 className="me-4">{actor.name}</h5>
          ))}
        </div>
        {/* Grid for recommendations */}
        <div className="col-lg-3 col-md-12 col-sm-12">
          <h4 className="mt-5 mb-4 text-center">Similar Movies</h4>
          {/* First row */}
          <div className="row justify-content-center">
            {/* Grid for one card */}
            {similar.slice(0, 2).map((e) => (
              <div className="col-lg-5 col-md-4 col-sm-4">
                <a href="">
                  <div className="card dark-card mb-3">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" + e.poster_path
                      }
                      alt=""
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            {/* Grid for one card */}
            {similar.slice(2, 4).map((e) => (
              <div className="col-lg-5 col-md-4 col-sm-4">
                <a href="">
                  <div className="card dark-card mb-3">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" + e.poster_path
                      }
                      alt=""
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
