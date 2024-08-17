import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BaseFantasyMovieProps } from "../../types/interfaces";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

interface FantasyMovieFormProps {
  onSubmit: (data: BaseFantasyMovieProps) => void;
}

const FantasyMovieForm: React.FC<FantasyMovieFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BaseFantasyMovieProps>();
  const [genres, setGenres] = useState<string[]>([]);
  const [productionCompanies, setProductionCompanies] = useState<string[]>([]);
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");

  const onSubmitForm = (
    data: Omit<BaseFantasyMovieProps, "id" | "genres" | "production_companies">
  ) => {
    onSubmit({
      ...data,
      id: Date.now(), // Create a temp id
      genres,
      production_companies: productionCompanies,
    });
  };

  const addGenre = () => {
    if (currentGenre && !genres.includes(currentGenre)) {
      setGenres([...genres, currentGenre]);
      setCurrentGenre("");
    }
  };

  const addCompany = () => {
    if (currentCompany && !productionCompanies.includes(currentCompany)) {
      setProductionCompanies([...productionCompanies, currentCompany]);
      setCurrentCompany("");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <TextField
        {...register("title", { required: "Title is required" })}
        label="Title"
        error={!!errors.title}
        helperText={errors.title?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        {...register("overview", { required: "Overview is required" })}
        label="Overview"
        error={!!errors.overview}
        helperText={errors.overview?.message}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        {...register("release_date", { required: "Release date is required" })}
        label="Release Date"
        type="date"
        error={!!errors.release_date}
        helperText={errors.release_date?.message}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        {...register("runtime", { required: "Runtime is required", min: 1 })}
        label="Runtime (minutes)"
        type="number"
        error={!!errors.runtime}
        helperText={errors.runtime?.message}
        fullWidth
        margin="normal"
      />

      <Box>
        <TextField
          value={currentGenre}
          onChange={(e) => setCurrentGenre(e.target.value)}
          label="Add Genre"
        />
        <Button onClick={addGenre}>Add</Button>
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            onDelete={() => setGenres(genres.filter((g) => g !== genre))}
          />
        ))}
      </Box>

      <Box>
        <TextField
          value={currentCompany}
          onChange={(e) => setCurrentCompany(e.target.value)}
          label="Add Production Company"
        />
        <Button onClick={addCompany}>Add</Button>
        {productionCompanies.map((company) => (
          <Chip
            key={company}
            label={company}
            onDelete={() =>
              setProductionCompanies(
                productionCompanies.filter((c) => c !== company)
              )
            }
          />
        ))}
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Create Fantasy Movie
      </Button>
    </form>
  );
};

export default FantasyMovieForm;
