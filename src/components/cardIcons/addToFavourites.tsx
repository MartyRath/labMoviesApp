import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseMovieProps, ActorDetailsProps } from "../../types/interfaces";

interface AddToFavouritesIconProps {
  item: BaseMovieProps | ActorDetailsProps;
  type: "movie" | "actor";
}

const AddToFavouritesIcon: React.FC<AddToFavouritesIconProps> = ({
  item,
  type,
}) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (type === "movie") {
      context.addToFavourites(item as BaseMovieProps);
    } else if (type === "actor") {
      context.addToFavouriteActors(item as ActorDetailsProps);
    }
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
