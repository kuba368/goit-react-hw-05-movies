import { Route, Routes } from 'react-router-dom';
import React from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const Movies = React.lazy(() => import('../../pages/Movies/Movies'));
const Cast = React.lazy(() => import('../../pages/Cast/Cast'));
const Reviews = React.lazy(() => import('../../pages/Reviews/Reviews'));
const NotFound = React.lazy(() => import('../../pages/NotFound/NotFound'));
const MovieDetails = React.lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
