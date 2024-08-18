// Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
// Supabase Auth
import { supabase } from "./supabaseClient";
import { Auth } from "./Auth";
import { Session } from "@supabase/supabase-js";
//Components
import SiteHeader from "./components/siteHeader";
// Contexts
import MoviesContextProvider from "./contexts/moviesContext";
import { FantasyMoviesProvider } from "./contexts/fantasyMoviesContext";
// Pages
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMovies from "./pages/upcomingMovies";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import ActorBioPage from "./pages/actorBio";
import TrendingMovies from "./pages/trendingMovies";
import PopularActors from "./pages/popularActors";
import AddFantasyMoviePage from "./pages/addFantasyMoviePage";
import FantasyMoviesList from "./pages/fantasyMoviesList";
import FantasyMovieDetailsPage from "./pages/fantasyMovieDetailsPage";
import ProtectedRoute from "./components/protectedRoute";

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <FantasyMoviesProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMovies />} />
            <Route
              path="/movies/favourites"
              element={
                <ProtectedRoute session={session}>
                  <FavouriteMoviesPage />
                </ProtectedRoute>
              }
            />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            {/* New routes */}
            <Route path="/actors/:id" element={<ActorBioPage />} />
            <Route path="/trendingMovies" element={<TrendingMovies />} />
            <Route path="/popularActors" element={<PopularActors />} />
            <Route
              path="/fantasyMovies/form"
              element={
                <ProtectedRoute session={session}>
                  <FavouriteMoviesPage />
                </ProtectedRoute>
              }
            />
            <Route path="/fantasyMovies" element={<FantasyMoviesList />} />
            <Route
              path="/fantasyMovies/:id"
              element={<FantasyMovieDetailsPage />}
            />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </FantasyMoviesProvider>
      </MoviesContextProvider>
    </BrowserRouter>
  );
};

export default App;
