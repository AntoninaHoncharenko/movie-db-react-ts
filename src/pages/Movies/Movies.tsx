import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { fetchMoviesByName } from '../../api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { Box } from '../../Box';

import { IMovie } from '../../types/movieType';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const movie: string = searchParams.get('query') ?? '';

  const handleSubmit = (query: string) => {
    const searchQuery: object = query !== '' ? { query } : {};
    setSearchParams(searchQuery);
  };

  useEffect(() => {
    if (movie === '') {
      return;
    }

    async function fetchMovie() {
      try {
        setIsloading(true);
        const data = await fetchMoviesByName(movie);

        if (data.length < 1) {
          toast.error(`${movie} is not defined!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }

        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }

    fetchMovie();
  }, [movie]);

  return (
    <Box width="1280px" m="0 auto" p="20px 16px">
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </Box>
  );
};

export default Movies;
