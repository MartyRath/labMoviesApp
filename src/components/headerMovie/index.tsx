import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieDetailsProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";
import Avatar from "@mui/material/Avatar";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  const { mustWatches, favourites } = useContext(MoviesContext); //NEW

  const isFavourite = favourites.find((id) => id === movie.id) ? true : false; //NEW
  const isMustWatch = mustWatches.find((id) => id === movie.id) ? true : false;

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {
        <>
          {isFavourite && (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          )}
          {isMustWatch && (
            <Avatar sx={styles.avatar}>
              <PlaylistAddIcon />
            </Avatar>
          )}
        </>
      }
      <Typography variant="h4" component="h3">
        {movie.title}
        {"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
