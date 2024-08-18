import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { BaseActorProps } from "../../types/interfaces";
import MovieIcon from "@mui/icons-material/Movie";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

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
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorBio: React.FC<BaseActorProps> = (actor) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography variant="body1" component="p">
        {actor.biography}
      </Typography>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<CakeIcon />} label={`Born: ${actor.birthday}`} />
        <Chip
          icon={<LocationOnIcon />}
          label={`Birthplace: ${actor.place_of_birth}`}
        />
        <Chip
          icon={<WorkIcon />}
          label={`Known for: ${actor.known_for_department}`}
        />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <MovieIcon />
        Known For
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        // Maybe add the actor's movies here later
      </Drawer>
    </>
  );
};

export default ActorBio;
