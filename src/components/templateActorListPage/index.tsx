import React from "react";
import Header from "../headerActorList"; // Update this to point to your actor header component
import Grid from "@mui/material/Grid";
import ActorList from "../actorList"; // You will need an ActorList component similar to MovieList
import { ActorListPageTemplateProps } from "../../types/interfaces"; // Update your interfaces as needed

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const ActorListPageTemplate: React.FC<ActorListPageTemplateProps> = ({
  actors,
  title,
  action,
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={actors} />{" "}
        {/* Use ActorList instead of MovieList */}
      </Grid>
    </Grid>
  );
};

export default ActorListPageTemplate;
