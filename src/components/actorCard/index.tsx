// Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

// Images
import img from "../../images/actor-placeholder.png";

// Interfaces
import { BaseActorProps } from "../../types/interfaces";

// Components
import { ActorsContext } from "../../contexts/actorsContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface ActorCardProps {
  actor: BaseActorProps;
  action?: (actor: BaseActorProps) => React.ReactNode;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  const { favourites } = useContext(ActorsContext);
  const isFavourite = favourites.find((id) => id === actor.id) ? true : false;

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          isFavourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.birthday || "Unknown"}
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action && typeof action === "function" ? action(actor) : null}
        <Button variant="outlined" size="medium" color="primary">
          <Link to={`/actors/${actor.id}`}>More Info ...</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
