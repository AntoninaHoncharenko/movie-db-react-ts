import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MovieCard, MovieImage, MovieTitle } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const { title, name, id, poster_path } = movie;

  return (
    <MovieCard>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://www.ena.org/UCommerce/Css/Sitefinity/images/image-not-found.png'
          }
          alt={title || name}
        />
        <MovieTitle>{title || name}</MovieTitle>
      </NavLink>
    </MovieCard>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};
