// Imports
import React, { useContext } from "react";
// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
//Images
import img from "../../images/film-poster-placeholder.png";
//Interfaces
import { BaseMovieProps } from "../../types/interfaces";
//Components
import { MoviesContext } from "../../contexts/moviesContext";
import MovieButton from "../moreInfoButton";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

// Making generic to accept FantasyMovie too
interface MovieCardProps<T extends BaseMovieProps> {
  movie: T;
  action: (m: T) => React.ReactNode;
}

const MovieCard = <T extends BaseMovieProps>({
  movie,
  action,
}: MovieCardProps<T>) => {
  const { mustWatches, favourites } = useContext(MoviesContext);

  const isFavourite = favourites.find((id) => id === movie.id) ? true : false; //NEW
  const isMustWatch = mustWatches.find((id) => id === movie.id) ? true : false;

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
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
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <MovieButton movie={movie} />
      </CardActions>
    </Card>
  );
};

export default MovieCard;
