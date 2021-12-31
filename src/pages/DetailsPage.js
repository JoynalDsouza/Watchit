import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
import { fetchMovieDetails } from "../services/MoviesService";
import { IMG_BASE_URL } from "../tmdb";

const DetailsPage = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetchMovieDetails(params.id)
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, [params.id]);
  console.log(data);
  return (
    <>
      <div className="w-11/12 flex flex-col mx-auto md:w-1/2">
        {data ? (
          <>
            <div className="text-2xl text-white font-semibold">
              {data.title}
            </div>
            <div className="text-white">{data.tagline}</div>

            <img
              src={`${IMG_BASE_URL}${data.backdrop_path}`}
              style={{ maxHeight: "400px" }} alt="Loading..."
            />
            <div className=" justify-center md:grid grid-cols-2 gap-4">
              <div className="text-white mt-4">{data.overview}</div>
              <div className="flex flex-col">
                <div className="bg-teal-300">
                  <div className="px-4 pt-4">
                    Runtime : {Math.floor(data.runtime / 60)} hr{" "}
                    {data.runtime % 60} mins
                  </div>
                  <div className="px-4">Status : {data.status}</div>
                  <div className="px-4">Release Date : {data.release_date}</div>
                  <div className="px-4 pb-4">
                    Rating : {data.vote_average} / 10
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => navigate(-1)} className="mx-auto text-white pt-1">  Go Back</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">Loading....</div>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
