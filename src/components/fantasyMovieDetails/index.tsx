// FantasyMovieDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useFantasyMovies } from "../../contexts/fantasyMoviesContext";
import { Paper, Chip, Typography, Box } from "@mui/material";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  header: {
    marginBottom: 2,
  },
  details: {
    marginBottom: 2,
  },
  chip: {
    margin: 0.5,
  },
};

const FantasyMovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fantasyMovies } = useFantasyMovies();

  const movie = fantasyMovies.find((m) => m.id === Number(id));

  if (!movie) {
    return <Typography variant="h1">Fantasy Movie Not Found</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" sx={styles.header}>
        {movie.title}
      </Typography>

      <Typography variant="h6" component="h2" sx={styles.details}>
        Overview
      </Typography>
      <Typography variant="body1" sx={styles.details}>
        {movie.overview}
      </Typography>

      {/* Display genres */}
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((genre, index) => (
          <li key={index}>
            <Chip label={genre} sx={styles.chip} />
          </li>
        ))}
      </Paper>

      {/* Display additional details */}
      <Paper component="ul" sx={styles.chipSet}>
        <Chip label={`Released: ${movie.release_date}`} sx={styles.chip} />
        <Chip label={`Runtime: ${movie.runtime} min`} sx={styles.chip} />
        {movie.production_companies.length > 0 && (
          <>
            <Chip
              label="Production Companies"
              sx={styles.chipLabel}
              color="primary"
            />
            {movie.production_companies.map((company, index) => (
              <Chip key={index} label={company} sx={styles.chip} />
            ))}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default FantasyMovieDetails;
