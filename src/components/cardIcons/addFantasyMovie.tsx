import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { BaseFantasyMovieProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const AddFantasyMovieIcon: React.FC<BaseFantasyMovieProps> = (movie) => {
  return (
    <Link
      to={"/fantasyMovies/form"}
      state={{
        movieId: movie.id,
      }}
    >
      <AutoAwesomeIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default AddFantasyMovieIcon;
