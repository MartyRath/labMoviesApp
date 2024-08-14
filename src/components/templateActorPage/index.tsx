import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { ActorImage, BaseActorProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import ActorHeader from "../headerActor";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: 450,
    height: "100vh",
  },
};

interface TemplateActorPageProps {
  actor: BaseActorProps;
  children: React.ReactElement;
}

const TemplateActorPage: React.FC<TemplateActorPageProps> = ({
  actor,
  children,
}) => {
  const { data, error, isLoading, isError } = useQuery<ActorImage[], Error>(
    ["actorImages", actor.id],
    () => getActorImages(actor.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = Array.isArray(data) ? data : [];

  return (
    <>
      <ActorHeader {...actor} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div>
            <ImageList cols={1}>
              {images.length > 0 ? (
                images.map((image: ActorImage) => (
                  <ImageListItem
                    key={image.file_path}
                    sx={styles.gridListTile}
                    cols={1}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={`${actor.name} image`}
                    />
                  </ImageListItem>
                ))
              ) : (
                <p>No images available</p>
              )}
            </ImageList>
          </div>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;
