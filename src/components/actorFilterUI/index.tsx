import React, { useState } from "react";
import FilterActorsCard from "../filterActorsCard"; // Adjust the path as needed
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { ActorDetailsProps } from "../../types/interfaces"; // Use the correct interface

export const nameFilter = (
  actor: ActorDetailsProps,
  value: string
): boolean => {
  return actor.name.toLowerCase().includes(value.toLowerCase());
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface ActorFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  nameFilter: string; // Changed to nameFilter
}

const ActorFilterUI: React.FC<ActorFilterUIProps> = ({
  onFilterValuesChange,
  nameFilter, // Changed prop name
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterActorsCard
          onUserInput={onFilterValuesChange}
          nameFilter={nameFilter} // Pass the name filter instead
        />
      </Drawer>
    </>
  );
};

export default ActorFilterUI;
