import { moviesActionTypes } from "./movies.types";

const initialState = {
  loading: false,
  error: "",
  data: [],
};

const adventureMoviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case moviesActionTypes.FETCH_ADVENTURE_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case moviesActionTypes.FETCH_ADVENTURE_MOVIES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case moviesActionTypes.FETCH_ADVENTURE_MOVIES_FAILURE:
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

export default adventureMoviesReducer;
