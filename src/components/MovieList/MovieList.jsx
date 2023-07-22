import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import placeholderImage from '../../images/placeholderImage.png';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map(({ title, id, poster_path }) => (
        <li className={styles.movieListItem} key={id}>
          <Link
            className={styles.movieLink}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {poster_path ? (
              <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`Poster of ${title}`}
              />
            ) : (
              <img
                className={styles.movieImage}
                src={placeholderImage}
                alt={'Placeholder'}
              />
            )}
            <p className={styles.movieTitle}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
