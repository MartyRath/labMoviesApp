import React from "react";
import { Paper, Chip, Typography, Box } from "@mui/material";
import { BaseFantasyMovieProps } from "../../types/interfaces";

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

const FantasyMovieDetails: React.FC<BaseFantasyMovieProps> = ({
  title,
  overview,
  genres,
  release_date,
  runtime,
  production_companies,
}) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" sx={styles.header}>
        {title}
      </Typography>

      <Typography variant="h6" component="h2" sx={styles.details}>
        Overview
      </Typography>
      <Typography variant="body1" sx={styles.details}>
        {overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {genres.map((genre) => (
          <li key={genre}>
            <Chip label={genre} sx={styles.chip} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip label={`Released: ${release_date}`} sx={styles.chip} />
        <Chip label={`Runtime: ${runtime} min`} sx={styles.chip} />
        {production_companies.length > 0 && (
          <>
            <Chip
              label="Production Companies"
              sx={styles.chipLabel}
              color="primary"
            />
            {production_companies.map((company, index) => (
              <Chip key={index} label={company} sx={styles.chip} />
            ))}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default FantasyMovieDetails;
