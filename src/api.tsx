import axios from 'axios';

import { IMovie } from './types/movieType';
import { IMovieDetails } from './types/movieDetailsType';
import { ICast } from './types/movieCastType';
import { IReview } from './types/movieReviewType';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '2b7f816e736d5b5ccbfcea974c6e28fa';

export const fetchTrendingMovies = async (): Promise<IMovie[]> => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const fetchMoviesByName = async (name: string): Promise<IMovie[]> => {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${name}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<IMovieDetails> => {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const fetchMovieCast = async (movieId: string): Promise<ICast[]> => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

export const fetchMovieReviews = async (
  movieId: string
): Promise<IReview[]> => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};
