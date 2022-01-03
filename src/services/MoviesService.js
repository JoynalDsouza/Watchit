import { API_URL, API_KEY } from "../tmdb";

export const fetchMoviesWithGenreId = (id) => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${id}`;
  return fetch(url).then((response) => response.json());
};

export const fetchTrendingMovies = () => {
  const url = `${API_URL}trending/movie/week?api_key=${API_KEY}`;

  return fetch(url).then((response) => response.json());
};

export const fetchTopRatedMovies = () => {
  const url = `${API_URL}movie/top_rated?api_key=${API_KEY}`;

  return fetch(url).then((response) => response.json());
};

export const fetchPopularMovies = () => {
  const url = `${API_URL}movie/popular?api_key=${API_KEY}`;

  return fetch(url).then((response) => response.json());
};

export const fetchUpcomingMovies = () => {
  const url = `${API_URL}movie/upcoming?api_key=${API_KEY}`;

  return fetch(url).then((response) => response.json());
};

export const fetchMovieDetails = (id) => {
  const url = `${API_URL}movie/${id}?api_key=${API_KEY}`;
  return fetch(url).then((response) => response.json());
};
