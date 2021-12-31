import { moviesActionTypes } from "./movies.types";

const INITIAL_STATE = {
  loading: false,
  error: "",
  data: [],
};

const actionMoviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case moviesActionTypes.FETCH_ACTION_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case moviesActionTypes.FETCH_ACTION_MOVIES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    
    case moviesActionTypes.FETCH_ACTION_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default actionMoviesReducer;
