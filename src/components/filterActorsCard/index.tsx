import React, { ChangeEvent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FilterOption } from "../../types/interfaces";

const styles = {
  root: {
    maxWidth: 345,
  },
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterActorsCardProps {
  onUserInput: (f: FilterOption, s: string) => void;
  nameFilter: string;
}

const FilterActorsCard: React.FC<FilterActorsCardProps> = ({
  nameFilter,
  onUserInput,
}) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUserInput("name", e.target.value);
  };

  return (
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the actors.
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={nameFilter}
          variant="filled"
          onChange={handleTextChange}
        />
      </CardContent>
    </Card>
  );
};

export default FilterActorsCard;
