import React from "react";
import { connect } from "react-redux";

import Row from "../RowComponent/Row";

const Movies = ({
  actionMovies,
  adventureMovies,
  animationMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  scifiMovies,
  mysteryMovies,
}) => {
  return (
    <>
      <Row items={actionMovies}>Action</Row>
      <Row items={adventureMovies}>Adventure</Row>
      <Row items={animationMovies}>Animation</Row>
      <Row items={comedyMovies}>Comedy</Row>
      <Row items={horrorMovies}>Horror</Row>
      <Row items={romanceMovies}>Romance</Row>
      <Row items={scifiMovies}>Scifi</Row>
      <Row items={mysteryMovies}>Mystery</Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  actionMovies: state.movies.actionMovies.data,
  adventureMovies: state.movies.adventureMovies.data,
  animationMovies: state.movies.animationMovies.data,
  comedyMovies: state.movies.comedyMovies.data,

  horrorMovies: state.movies.horrorMovies.data,
  romanceMovies: state.movies.romanceMovies.data,
  scifiMovies: state.movies.scifiMovies.data,
  mysteryMovies: state.movies.mysteryMovies.data,
});

export default connect(mapStateToProps)(Movies);
