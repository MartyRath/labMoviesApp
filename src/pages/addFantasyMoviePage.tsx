import React from "react";
import FantasyMovieForm from "../components/fantasyMovieForm";
import { useNavigate } from "react-router-dom";
import { BaseFantasyMovieProps } from "../types/interfaces";
import { useFantasyMovies } from "../contexts/fantasyMoviesContext";

const AddFantasyMoviePage: React.FC = () => {
  const navigate = useNavigate();
  const { addFantasyMovie } = useFantasyMovies();

  const handleSubmit = (fantasyMovie: BaseFantasyMovieProps) => {
    addFantasyMovie(fantasyMovie);
    navigate("/fantasyMovies"); // Go to the fantasy movies list page
  };

  return (
    <div>
      <h1>Create Your Fantasy Movie</h1>
      <FantasyMovieForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddFantasyMoviePage;
