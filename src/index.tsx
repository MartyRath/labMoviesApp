// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"; // Removed link
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Pages
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMovies from "./pages/upcomingMovies";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import ActorBioPage from "./pages/actorBio"; //newly added
import TrendingMovies from "./pages/trendingMovies";
import PopularActors from "./pages/popularActors";
import AddFantasyMoviePage from "./pages/addFantasyMoviePage";
import FantasyMoviesList from "./pages/fantasyMoviesList";

// Components
import SiteHeader from "./components/siteHeader";
// Contexts
import MoviesContextProvider from "./contexts/moviesContext";
// Added Fantasy Movies Provider for fantasy movie state
import { FantasyMoviesProvider } from "./contexts/fantasyMoviesContext";
import FantasyMovieDetailsPage from "./pages/fantasyMovieDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <FantasyMoviesProvider>
            {" "}
            {/* For state */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Redirects home if invalid URL entered */}
              <Route path="*" element={<Navigate to="/" />} />{" "}
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMovies />} />
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              {/* New Routes */}
              <Route path="/actors/:id" element={<ActorBioPage />} />
              <Route path="/trendingMovies" element={<TrendingMovies />} />
              <Route path="/popularActors" element={<PopularActors />} />
              {/* Fantasy Movie Routes */}
              <Route
                path="/fantasyMovies/form"
                element={<AddFantasyMoviePage />}
              />
              <Route path="/fantasyMovies" element={<FantasyMoviesList />} />
              <Route
                path="/fantasyMovies/:id"
                element={<FantasyMovieDetailsPage />}
              />
            </Routes>
          </FantasyMoviesProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
