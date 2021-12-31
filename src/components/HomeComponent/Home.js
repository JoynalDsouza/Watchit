import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectTrendingMoviesData,
  selectPopularMoviesData,
  selectTopRatedMoviesData,
  selectUpcomingMoviesData,
} from "../../redux/movies/movies.selectors";
import Row from "../RowComponent/Row";


const Home = ({
  trendingMovies,

  popularMovies,
  topRatedMovies,
  upComingMovies,
}) => {
  return (
    <>
      <Row items={trendingMovies}>Trending</Row>
      <Row items={upComingMovies}>Latest</Row>

      <Row items={topRatedMovies}>Top Rated</Row>
      <Row items={popularMovies}>Popular</Row>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  trendingMovies: selectTrendingMoviesData,

  popularMovies: selectPopularMoviesData,
  topRatedMovies: selectTopRatedMoviesData,
  upComingMovies: selectUpcomingMoviesData,
});

export default connect(mapStateToProps)(Home);
