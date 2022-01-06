import React from "react";
import { connect } from "react-redux";


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

const mapStateToProps = state => ({
   trendingMovies : state.movies.trendingMovies.data,
  popularMovies :  state.movies.trendingMovies.data,
  topRatedMovies :state.movies.trendingMovies.data,
  upComingMovies  :state.movies.trendingMovies.data,
});



export default connect(mapStateToProps)(Home);
