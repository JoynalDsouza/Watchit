import { combineReducers } from "redux";
import actionMoviesReducer from "./action.reducer";
import adventureMoviesReducer from "./adventure.reducer";
import comedyMoviesReducer from "./comedy.reducer";
import horrorMoviesReducer from "./horror.reducer";
import romanceMoviesReducer from "./romance.reducer";
import mysteryMoviesReducer from "./mystery.reducer";
import scifiMoviesReducer from "./scifi.reducer";
import animationMoviesReducer from "./animation.reducer";

import topRatedMoviesReducer from "./topRated.reducer";
import trendingMoviesReducer from "./trending.reducer";
import upcomingMoviesReducer from "./upcoming.reducer";
import popularMoviesReducer from "./popular.reducer";

export default combineReducers({
  actionMovies: actionMoviesReducer,
  adventureMovies: adventureMoviesReducer,
  animationMovies: animationMoviesReducer,
  comedyMovies: comedyMoviesReducer,
  horrorMovies: horrorMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  scifiMovies: scifiMoviesReducer,
  mysteryMovies: mysteryMoviesReducer,

  topRatedMovies: topRatedMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
  popularMovies: popularMoviesReducer,
});
