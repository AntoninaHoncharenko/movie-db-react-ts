import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MovieCard, MovieImage, MovieTitle } from './MovieItem.styled';
import { IMovie } from '../../types/movieType';

import { Location } from 'history';

interface IProps {
  movie: IMovie;
}

export const MovieItem: React.FC<IProps> = ({ movie }) => {
  const location: Location = useLocation();
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
