import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieProps } from "../../types/interfaces";

// Make the interface generic to accept any FantasyMovie that extends BaseMovieProps
interface BaseMovieListProps<T extends BaseMovieProps> {
  movies: T[];
  action: (m: T) => React.ReactNode;
}

const MovieList = <T extends BaseMovieProps>({
  movies,
  action,
}: BaseMovieListProps<T>) => {
  const movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default MovieList;
