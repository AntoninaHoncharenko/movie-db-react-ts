import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api';
import { Loader } from '../../components/Loader/Loader';
import {
  ReviewItem,
  ReviewsList,
  Autor,
  Text,
  NotFound,
} from './Reviews.styled';

import { IReview } from '../../types/movieReviewType';

const Review: React.FC = () => {
  const { movieId } = useParams<string>();
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isLoading, setIsloading] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchMovieReviewsList() {
      try {
        setIsloading(true);
        if (movieId) {
          const data = await fetchMovieReviews(movieId);
          setReviews(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }

    fetchMovieReviewsList();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length > 1 && (
        <ReviewsList>
          {reviews.map(({ author, content, id }) => (
            <ReviewItem key={id}>
              <Autor>{author}</Autor>
              <Text>{content}</Text>
            </ReviewItem>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && !isLoading && (
        <NotFound>Reviews have not been written yet</NotFound>
      )}
    </div>
  );
};

export default Review;
