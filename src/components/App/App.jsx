import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import css from "./App.module.css";
import Navigation from "./../../components/Navigation/Navigation";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("./../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviePage = lazy(() => import("./../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("./../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("./../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./../../components/MovieReviews/MovieReviews")
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
