import { PropTypes } from 'prop-types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Movies } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <Movies>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Movies>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
