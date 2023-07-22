import axios from 'axios';

const API_KEY = 'ef7bbc65cde0a77a652ac5d100215648';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async setMovies => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return setMovies(response.data.results);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const fetchMoviesByQuery = async (query, setSearchedMovies) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=true`
    );
    const data = response.data.results;
    return setSearchedMovies(data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const fetchMoviesById = async (movieId, setMovie) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    return setMovie(response.data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const fetchCast = async (movieId, setCast) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return setCast(response.data.cast);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const fetchReviews = async (movieId, setReviews) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return setReviews(response.data.results);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
