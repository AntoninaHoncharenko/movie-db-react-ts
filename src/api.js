import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '2b7f816e736d5b5ccbfcea974c6e28fa';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const fetchMoviesByName = async name => {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${name}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};
