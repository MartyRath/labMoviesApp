import React from "react";
import { useParams } from "react-router-dom";
import ActorBio from "../components/actorBio";
import PageTemplate from "../components/templateActorPage";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { ActorDetailsProps } from "../types/interfaces";

const ActorBioPage: React.FC = () => {
  const { id } = useParams();
  const {
    data: actor,
    error,
    isLoading,
    isError,
  } = useQuery<ActorDetailsProps, Error>(["actor", id], () =>
    getActor(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorBio {...actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorBioPage;
