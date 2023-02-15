import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Title } from './Home.styled';
import { Box } from 'Box';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsloading(true);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <Box width="1280px" m="0 auto" p="20px 16px">
      <Title>Trenting today</Title>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </Box>
  );
};

export default Home;
