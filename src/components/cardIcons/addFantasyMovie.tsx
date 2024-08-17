import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";

const AddFantasyMovieIcon: React.FC<{ movieId: number }> = ({ movieId }) => {
  return (
    <Link
      to={"/fantasyMovies/form"}
      state={{
        movieId: movieId,
      }}
    >
      <AutoAwesomeIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default AddFantasyMovieIcon;
