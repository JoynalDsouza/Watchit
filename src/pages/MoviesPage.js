import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  fetchActionMoviesAsync,
  fetchAdventureMoviesAsync,
  fetchAnimationMoviesAsync,
  fetchComedyMoviesAsync,
  fetchRomanceMoviesAsync,
  fetchHorrorMoviesAsync,
  fetchScifiMoviesAsync,
  fetchMysteryMoviesAsync,
} from "../redux/movies/movies.actions";

import Movies from "../components/MoviesComponent/Movies";

const MoviesPage = ({
  fetchActionMoviesAsync,
  fetchAdventureMoviesAsync,
  fetchAnimationMoviesAsync,
  fetchComedyMoviesAsync,

  fetchRomanceMoviesAsync,
  fetchHorrorMoviesAsync,
  fetchScifiMoviesAsync,
  fetchMysteryMoviesAsync,
}) => {
  useEffect(() => {
    fetchActionMoviesAsync();
    fetchAdventureMoviesAsync();
    fetchAnimationMoviesAsync();
    fetchComedyMoviesAsync();

    fetchRomanceMoviesAsync();
    fetchHorrorMoviesAsync();
    fetchScifiMoviesAsync();
    fetchMysteryMoviesAsync();
  }, [
    fetchActionMoviesAsync,
    fetchAdventureMoviesAsync,
    fetchAnimationMoviesAsync,
    fetchComedyMoviesAsync,

    fetchRomanceMoviesAsync,
    fetchHorrorMoviesAsync,
    fetchScifiMoviesAsync,
    fetchMysteryMoviesAsync,
  ]);

  return (
    <>
      <Movies />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchActionMoviesAsync: () => dispatch(fetchActionMoviesAsync()),
  fetchAdventureMoviesAsync: () => dispatch(fetchAdventureMoviesAsync()),
  fetchAnimationMoviesAsync: () => dispatch(fetchAnimationMoviesAsync()),
  fetchComedyMoviesAsync: () => dispatch(fetchComedyMoviesAsync()),

  fetchHorrorMoviesAsync: () => dispatch(fetchHorrorMoviesAsync()),
  fetchScifiMoviesAsync: () => dispatch(fetchScifiMoviesAsync()),
  fetchRomanceMoviesAsync: () => dispatch(fetchRomanceMoviesAsync()),
  fetchMysteryMoviesAsync: () => dispatch(fetchMysteryMoviesAsync()),
});

export default connect(null, mapDispatchToProps)(MoviesPage);
