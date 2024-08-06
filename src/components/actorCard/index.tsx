import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import img from "../../images/film-poster-placeholder.png"; // Change image for actors
import { ActorDetailsProps } from "../../types/interfaces";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface ActorCardProps {
  actor: ActorDetailsProps;
  action: (a: ActorDetailsProps) => void;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={<Avatar sx={styles.avatar}>{actor.name.charAt(0)}</Avatar>}
        title={
          <Typography variant="h6" component="div">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={actor.profile_path ? actor.profile_path : img}
        title={actor.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {actor.biography}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => action(actor)}>
          Perform Action
        </Button>
        <Link to={`/actors/${actor.id}`}>
          <Button size="small">More Info</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
