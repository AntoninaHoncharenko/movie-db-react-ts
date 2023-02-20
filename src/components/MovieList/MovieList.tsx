import React from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { Movies } from './MovieList.styled';
import { IMovie } from '../../types/movieType';

interface IProps {
  movies: IMovie[];
}

export const MovieList: React.FC<IProps> = ({ movies }) => {
  return (
    <Movies>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Movies>
  );
};
