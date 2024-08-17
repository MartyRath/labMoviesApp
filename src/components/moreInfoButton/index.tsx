import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { BaseMovieProps, BaseFantasyMovieProps } from "../../types/interfaces";

interface MovieButtonProps {
  movie: BaseMovieProps | BaseFantasyMovieProps;
}

const MovieButton: React.FC<MovieButtonProps> = ({ movie }) => {
  const isFantasyMovie = "is_fantasy" in movie && movie.is_fantasy;
  const linkTo = isFantasyMovie
    ? `/fantasyMovies/${movie.id}`
    : `/movies/${movie.id}`;

  console.log("Is Fantasy Movie:", isFantasyMovie);
  return (
    <Button
      variant="outlined"
      size="medium"
      color="primary"
      component={Link}
      to={linkTo}
    >
      More Info ...
    </Button>
  );
};

export default MovieButton;
