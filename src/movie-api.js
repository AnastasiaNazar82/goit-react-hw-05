import axios from "axios";

// const API_KEY = "8ce45a9256133b42bd1039dde4ce6dc0";
axios.defaults.baseURL = "https://api.themoviedb.org/";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2U0NWE5MjU2MTMzYjQyYmQxMDM5ZGRlNGNlNmRjMCIsInN1YiI6IjY2NTczY2M3NzQ2OWIwMDZjNzVjYTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MHSFLRRaFjIf624KwjdwB7NRUDGpYVyOAPmvfq55r6w`,
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`3/trending/movie/day`, options);
  return response.data.results;
};

export const getSearchMovie = async (query) => {
  const response = await axios.get(`3/search/movie?query=${query}`, options);
  return response.data.results;
};

export const getMoviesDetails = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, options);
  return response.data;
};

export const getMoviesCast = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, options);
  return response.data;
};

export const getMoviesReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, options);
  return response.data;
};
