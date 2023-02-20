import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from '../../api';
import { Loader } from '../../components/Loader/Loader';
import { Box } from '../../Box';
import { BsBoxArrowLeft } from 'react-icons/bs';
import {
  BackLink,
  ImageThumb,
  Image,
  MovieTitle,
  Raiting,
  Subtitle,
  Text,
  Link,
} from './MovieDetails.styled';

import { IMovieDetails } from '../../types/movieDetailsType';

interface ILocation {
  pathname: string;
  search: string;
  hash: string;
  state: {
    from: string;
  };
  key: string;
}

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<string>();
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location: ILocation = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);

        if (movieId) {
          const data = await fetchMovieDetails(movieId);
          setMovie(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, release_date, vote_average, overview, poster_path, genres } =
    movie;

  return (
    <Box width="1280px" m="0 auto" p="20px 16px">
      <BackLink to={location.state?.from ?? '/'}>
        <BsBoxArrowLeft size="28" />
        <p>Go back</p>
      </BackLink>
      {isLoading && <Loader />}

      <Box display="flex" mb="40px">
        <ImageThumb>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://www.ena.org/UCommerce/Css/Sitefinity/images/image-not-found.png'
            }
            alt={title}
          />
        </ImageThumb>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <div>
            <MovieTitle>
              {title} <span>({release_date.slice(0, 4)})</span>
            </MovieTitle>
            <Raiting>Raiting: {vote_average.toFixed(1)}/10</Raiting>
            <Subtitle>Overview</Subtitle>
            <Text>{overview}</Text>
            <Subtitle>Genres</Subtitle>
            <Text>{genres.map(genre => genre.name).join(', ')}</Text>
          </div>

          <div>
            <Link to="cast" state={{ from: location.state?.from } ?? '/'}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: location.state?.from } ?? '/'}>
              Reviews
            </Link>
          </div>
        </Box>
      </Box>

      {/*  */}
      {/* <Box ml="332px" mb="20px">
        <Link to="cast" state={{ from: location.state?.from } ?? '/'}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state?.from } ?? '/'}>
          Reviews
        </Link>
      </Box> */}
      {/*  */}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
