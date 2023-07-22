import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/API';
import MovieList from 'components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies(setMovies).catch(console.error);
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.header}>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;
