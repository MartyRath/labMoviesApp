import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { BaseFantasyMovieProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const AddFantasyMovieIcon: React.FC<BaseFantasyMovieProps> = (fantasyMovie) => {
  return (
    <Link
      to={"/fantasyMovies/form"}
      state={{
        fantasyMovieId: fantasyMovie.id,
      }}
    >
      <AutoAwesomeIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default AddFantasyMovieIcon;
