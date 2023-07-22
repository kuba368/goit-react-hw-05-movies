import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/API';
import { nanoid } from 'nanoid';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId, setReviews).catch(console.error);
  }, [movieId]);

  return (
    <section>
      {reviews.length < 1 ? (
        <p>Sorry, no reviews available.</p>
      ) : (
        <ul>
          {reviews.map(({ author, content }) => {
            return (
              <li className={styles.listItem} key={nanoid()}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
