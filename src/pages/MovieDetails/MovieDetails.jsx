import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/API';
import placeholderImage from '../../images/placeholderImage.png';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const backTo = location.state?.from ?? '/';
  const [movie, setMovie] = useState({});
  const { title, overview, vote_average, genres, poster_path } = movie;

  useEffect(() => {
    fetchMoviesById(movieId, setMovie).catch(console.error);
  }, [movieId]);

  return (
    <section>
      <button
        className={styles.button}
        onClick={() => navigate(backTo, { replace: true })}
      >
        Go back
      </button>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          {poster_path ? (
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          ) : (
            <img
              className={styles.poster}
              src={placeholderImage}
              alt={'Placeholder'}
            />
          )}
        </div>
        <div className={styles.rightSide}>
          <h1>{title}</h1>
          <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres?.map(({ name }) => name + ', ')}</p>
        </div>
      </div>
      <div className={styles.additionalInfoWrapper}>
        <h3 className={styles.additionalInformation}>Additional information</h3>
        <ul className={styles.additionalInfoListWrapper}>
          <li className={styles.additionalInformationList}>
            <NavLink className={styles.link} to={'cast'} state={location.state}>
              Cast
            </NavLink>
          </li>
          <li className={styles.additionalInformationList}>
            <NavLink
              className={styles.link}
              to={'reviews'}
              state={location.state}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;
