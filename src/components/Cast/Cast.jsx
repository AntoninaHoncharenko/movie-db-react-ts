import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api';
import { Loader } from 'components/Loader/Loader';
import {
  CastList,
  CastItem,
  Image,
  CastName,
  Character,
  NotFound,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchMovieCastList() {
      try {
        setIsloading(true);
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }

    fetchMovieCastList();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 1 && (
        <CastList>
          {cast.map(({ name, character, profile_path, id }) => (
            <CastItem key={id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png'
                }
                alt={name}
              />
              <CastName>{name}</CastName>
              <Character>{character}</Character>
            </CastItem>
          ))}
        </CastList>
      )}
      {cast.length === 0 && !isLoading && (
        <NotFound>Cast is not found</NotFound>
      )}
    </>
  );
};

export default Cast;
