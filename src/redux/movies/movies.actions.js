import { moviesActionTypes } from "./movies.types";
import {
  fetchMoviesWithGenreId,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchPopularMovies,
} from "../../services/MoviesService";

//Action
export const fetchActionMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_ACTION_MOVIES_REQUEST,
});

export const fetchActionMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_ACTION_MOVIES_SUCCESS,
  payload: items,
});

export const fetchActionMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_ACTION_MOVIES_FAILURE,
  payload: error,
});

export const fetchActionMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchActionMoviesRequest());
    fetchMoviesWithGenreId(28)
      .then((res) => {
        const result = res.results;
        dispatch(fetchActionMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchActionMoviesFailure(error.message)));
  };
};

//Adventure

export const fetchAdventureMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_REQUEST,
});

export const fetchAdventureMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_SUCCESS,
  payload: items,
});

export const fetchAdventureMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_FAILURE,
  payload: error,
});

export const fetchAdventureMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchAdventureMoviesRequest());
    fetchMoviesWithGenreId(12)
      .then((res) => {
        const result = res.results;
        dispatch(fetchAdventureMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchAdventureMoviesFailure(error.message)));
  };
};

//Comedy
export const fetchComedyMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_COMEDY_MOVIES_REQUEST,
});

export const fetchComedyMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_COMEDY_MOVIES_SUCCESS,
  payload: items,
});

export const fetchComedyMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_COMEDY_MOVIES_FAILURE,
  payload: error,
});

export const fetchComedyMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchComedyMoviesRequest());
    fetchMoviesWithGenreId(35)
      .then((res) => {
        const result = res.results;
        dispatch(fetchComedyMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchComedyMoviesFailure(error.message)));
  };
};

//Animation
export const fetchAnimationMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_ANIMATION_MOVIES_REQUEST,
});

export const fetchAnimationMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_ANIMATION_MOVIES_SUCCESS,
  payload: items,
});

export const fetchAnimationMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_ANIMATION_MOVIES_FAILURE,
  payload: error,
});

export const fetchAnimationMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchAnimationMoviesRequest());
    fetchMoviesWithGenreId(16)
      .then((res) => {
        const result = res.results;
        dispatch(fetchAnimationMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchAnimationMoviesFailure(error.message)));
  };
};

//Horror
export const fetchHorrorMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST,
});

export const fetchHorrorMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS,
  payload: items,
});

export const fetchHorrorMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE,
  payload: error,
});

export const fetchHorrorMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchHorrorMoviesRequest());
    fetchMoviesWithGenreId(27)
      .then((res) => {
        const result = res.results;
        dispatch(fetchHorrorMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchHorrorMoviesFailure(error.message)));
  };
};

//Romance
export const fetchRomanceMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
});

export const fetchRomanceMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
  payload: items,
});

export const fetchRomanceMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
  payload: error,
});

export const fetchRomanceMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchRomanceMoviesRequest());
    fetchMoviesWithGenreId(10749)
      .then((res) => {
        const result = res.results;
        dispatch(fetchRomanceMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchRomanceMoviesFailure(error.message)));
  };
};

//Scifi
export const fetchScifiMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_SCIFI_MOVIES_REQUEST,
});

export const fetchScifiMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_SCIFI_MOVIES_SUCCESS,
  payload: items,
});

export const fetchScifiMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_SCIFI_MOVIES_FAILURE,
  payload: error,
});

export const fetchScifiMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchScifiMoviesRequest());
    fetchMoviesWithGenreId(878)
      .then((res) => {
        const result = res.results;
        dispatch(fetchScifiMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchScifiMoviesFailure(error.message)));
  };
};

//Mystery
export const fetchMysteryMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_MYSTERY_MOVIES_REQUEST,
});

export const fetchMysteryMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_MYSTERY_MOVIES_SUCCESS,
  payload: items,
});

export const fetchMysteryMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_MYSTERY_MOVIES_FAILURE,
  payload: error,
});

export const fetchMysteryMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchMysteryMoviesRequest());
    fetchMoviesWithGenreId(9648)
      .then((res) => {
        const result = res.results;
        dispatch(fetchMysteryMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchMysteryMoviesFailure(error.message)));
  };
};

//Trending
export const fetchTrendingMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_TRENDING_MOVIES_REQUEST,
});

export const fetchTrendingMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
  payload: items,
});

export const fetchTrendingMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_TRENDING_MOVIES_FAILURE,
  payload: error,
});

export const fetchTrendingMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchTrendingMoviesRequest());
    fetchTrendingMovies()
      .then((res) => {
        const result = res.results;
        dispatch(fetchTrendingMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchTrendingMoviesFailure(error.message)));
  };
};

//TopRated
export const fetchTopRatedMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_REQUEST,
});

export const fetchTopRatedMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
  payload: items,
});

export const fetchTopRatedMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE,
  payload: error,
});

export const fetchTopRatedMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchTopRatedMoviesRequest());
    fetchTopRatedMovies()
      .then((res) => {
        const result = res.results;
        dispatch(fetchTopRatedMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchTopRatedMoviesFailure(error.message)));
  };
};

//Popular
export const fetchPopularMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_POPULAR_MOVIES_REQUEST,
});

export const fetchPopularMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: items,
});

export const fetchPopularMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
  payload: error,
});

export const fetchPopularMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchPopularMoviesRequest());
    fetchPopularMovies()
      .then((res) => {
        const result = res.results;
        dispatch(fetchPopularMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchPopularMoviesFailure(error.message)));
  };
};

//Upcoming
export const fetchUpcomingMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_UPCOMING_MOVIES_REQUEST,
});

export const fetchUpcomingMoviesSuccess = (items) => ({
  type: moviesActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
  payload: items,
});

export const fetchUpcomingMoviesFailure = (error) => ({
  type: moviesActionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
  payload: error,
});

export const fetchUpcomingMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchUpcomingMoviesRequest());
    fetchUpcomingMovies()
      .then((res) => {
        const result = res.results;
        dispatch(fetchUpcomingMoviesSuccess(result));
      })
      .catch((error) => dispatch(fetchUpcomingMoviesFailure(error.message)));
  };
};
