import React from "react";
import PageTemplate from "../components/templateActorListPage"; // Use a specific template for actors
import { getPopularActors } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import ActorFilterUI from "../components/actorFilterUI";
import { ActorDetailsProps, DiscoverActors } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const nameFiltering = (actor: ActorDetailsProps, value: string): boolean => {
  return actor.name.toLowerCase().includes(value.toLowerCase());
};

const PopularActors: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>(
    "popularActors", // Use a consistent key for the query
    getPopularActors
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    { name: "name", value: "", condition: nameFiltering }, // Pass the filtering logic here
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    setFilterValues([changedFilter]);
  };

  const actors = data ? data.results : [];
  const displayedActors = filterFunction(actors);

  return (
    <>
      <PageTemplate
        title="Popular Actors"
        actors={displayedActors}
        action={(actor: ActorDetailsProps) => {
          return (
            <AddToFavouritesIcon
              title={""}
              budget={0}
              homepage={undefined}
              original_language={""}
              overview={""}
              release_date={""}
              vote_average={0}
              popularity={0}
              tagline={""}
              runtime={0}
              revenue={0}
              vote_count={0}
              {...actor}
            />
          );
        }}
      />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default PopularActors;
