import { createSelector } from "reselect";

export const selectActionMovies = (state) => state.movies.actionMovies;
export const selectAdventureMovies = (state) => state.movies.adventureMovies;
export const selectAnimationMovies = (state) => state.movies.animationMovies;
export const selectComedyMovies = (state) => state.movies.comedyMovies;
export const selectHorrorMovies = (state) => state.movies.horrorMovies;
export const selectRomanceMovies = (state) => state.movies.romanceMovies;
export const selectScifiMovies = (state) => state.movies.scifiMovies;
export const selectMysteryMovies = (state) => state.movies.mysteryMovies;

export const selectTopRatedMovies = (state) => state.movies.topRatedMovies;
export const selectTrendingMovies = (state) => state.movies.trendingMovies;
export const selectUpcomingMovies = (state) => state.movies.upcomingMovies;
export const selectPopularMovies = (state) => state.movies.popularMovies;

export const selectActionMoviesData = createSelector(
  [selectActionMovies],
  (actionMovies) => actionMovies.data
);

export const selectAdventureMoviesData = createSelector(
  [selectAdventureMovies],
  (adventureMovies) => adventureMovies.data
);

export const selectAnimationMoviesData = createSelector(
  [selectAnimationMovies],
  (animationMovies) => animationMovies.data
);

export const selectComedyMoviesData = createSelector(
  [selectComedyMovies],
  (comedyMovies) => comedyMovies.data
);

export const selectHorrorMoviesData = createSelector(
  [selectHorrorMovies],
  (horrorMovies) => horrorMovies.data
);

export const selectRomanceMoviesData = createSelector(
  [selectRomanceMovies],
  (romanceMovies) => romanceMovies.data
);

export const selectScifiMoviesData = createSelector(
  [selectScifiMovies],
  (scifiMovies) => scifiMovies.data
);

export const selectMysteryMoviesData = createSelector(
  [selectMysteryMovies],
  (mysteryMovies) => mysteryMovies.data
);

export const selectTopRatedMoviesData = createSelector(
  [selectTopRatedMovies],
  (topRatedMovies) => topRatedMovies.data
);

export const selectTrendingMoviesData = createSelector(
  [selectTrendingMovies],
  (trendingMovies) => trendingMovies.data
);

export const selectUpcomingMoviesData = createSelector(
  [selectUpcomingMovies],
  (upcomingMovies) => upcomingMovies.data
);

export const selectPopularMoviesData = createSelector(
  [selectPopularMovies],
  (popularMovies) => popularMovies.data
);
