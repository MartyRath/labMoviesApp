import React from "react";
import { useParams } from "react-router-dom";
// Contexts
import { useFantasyMovies } from "../contexts/fantasyMoviesContext";
// Components
import PageTemplate from "../components/templateMoviePage";
import FantasyMovieDetails from "../components/fantasyMovieDetails";

const FantasyMovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { fantasyMovies } = useFantasyMovies();

  const movie = fantasyMovies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h1>Fantasy Movie Not Found</h1>;
  }

  return (
    <>
      <PageTemplate movie={movie}>
        <FantasyMovieDetails {...movie} />
      </PageTemplate>
    </>
  );
};

export default FantasyMovieDetailsPage;
