import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/API';
import styles from './Movies.module.css';

const Movies = () => {
  const params = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryValue = form.elements.query.value;

    if (queryValue === '') {
      return setErrorMessage('The search field cannot be empty!');
    }
    setSearchParams({ query: queryValue });
    setErrorMessage('');
    form.reset();
  };

  useEffect(() => {
    if (query) {
      fetchMoviesByQuery(query, setSearchedMovies).catch(console.error);
    }
  }, [query]);

  return (
    <main className={styles.wrapper}>
      {params.movieId ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Searchbar onSubmit={onSubmit} />
          {errorMessage ? (
            <div>{errorMessage}</div>
          ) : (
            <MovieList movies={searchedMovies} />
          )}
        </>
      )}
    </main>
  );
};

export default Movies;
