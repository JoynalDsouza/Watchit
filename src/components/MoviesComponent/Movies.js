import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectActionMoviesData,
  selectAdventureMoviesData,
  selectAnimationMoviesData,
  selectComedyMoviesData,
  selectHorrorMoviesData,
  selectRomanceMoviesData,
  selectScifiMoviesData,
  selectMysteryMoviesData,
} from "../../redux/movies/movies.selectors";
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

const mapStateToProps = createStructuredSelector({
  actionMovies: selectActionMoviesData,
  adventureMovies: selectAdventureMoviesData,
  animationMovies: selectAnimationMoviesData,
  comedyMovies: selectComedyMoviesData,

  horrorMovies: selectHorrorMoviesData,
  romanceMovies: selectRomanceMoviesData,
  scifiMovies: selectScifiMoviesData,
  mysteryMovies: selectMysteryMoviesData,
});

export default connect(mapStateToProps)(Movies);
