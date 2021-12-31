import React from "react";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../tmdb";

const ItemCard = ({ item }) => {
  return (
    <>
      <Link to={`/details/${item.id}`}>
        <div
          className="mx-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
          style={{ width: "350px" }}
        >
          <img
            className="h-96"
            src={`${IMG_BASE_URL}/${item.poster_path}`}
            alt="movie"
          />

          <div className="flex justify-between items-center">
            <div className="text-xl text-white font-bold ">{item.title}</div>
            {/* <div className="text-white">
              <i>Rating : {item.vote_average} </i>
            </div> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemCard;
