import { API_URL, API_KEY } from "../tmdb";

export const fetchActionMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`;
  return fetch(url).then((response) => response.json());
};
export const fetchAdventureMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=12`;
  return fetch(url).then((response) => response.json());
};
export const fetchHorrorMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`;
  return fetch(url).then((response) => response.json());
};
export const fetchComedyMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`;
  return fetch(url).then((response) => response.json());
};
export const fetchAnimationMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=16`;
  return fetch(url).then((response) => response.json());
};

export const fetchRomanceMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`;
  return fetch(url).then((response) => response.json());
};

export const fetchScifiMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=878`;
  return fetch(url).then((response) => response.json());
};

export const fetchMysteryMovies = () => {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=9648`;
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
