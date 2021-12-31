import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  fetchTrendingMoviesAsync,
  fetchPopularMoviesAsync,
  fetchTopRatedMoviesAsync,
  fetchUpcomingMoviesAsync,
} from "../redux/movies/movies.actions";

import Home from "../components/HomeComponent/Home";

const HomePage = ({
  fetchTrendingMoviesAsync,
  fetchPopularMoviesAsync,
  fetchTopRatedMoviesAsync,
  fetchUpcomingMoviesAsync,
}) => {
  useEffect(() => {
    fetchTrendingMoviesAsync();

    fetchPopularMoviesAsync();
    fetchTopRatedMoviesAsync();
    fetchUpcomingMoviesAsync();
  }, [
    fetchTrendingMoviesAsync,
    fetchPopularMoviesAsync,
    fetchTopRatedMoviesAsync,
    fetchUpcomingMoviesAsync,
  ]);

  return (
    <>
      <Home />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingMoviesAsync: () => dispatch(fetchTrendingMoviesAsync()),
  fetchPopularMoviesAsync: () => dispatch(fetchPopularMoviesAsync()),
  fetchTopRatedMoviesAsync: () => dispatch(fetchTopRatedMoviesAsync()),
  fetchUpcomingMoviesAsync: () => dispatch(fetchUpcomingMoviesAsync()),
});

export default connect(null, mapDispatchToProps)(HomePage);
