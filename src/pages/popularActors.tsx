import React from "react";
import PageTemplate from "../components/templateActorListPage"; // Use a specific template for actors
import { getPopularActors } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import ActorFilterUI from "../components/actorFilterUI";
import { BaseActorProps, DiscoverActors } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
//import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const nameFiltering = (actor: BaseActorProps, value: string): boolean => {
  return actor.name.toLowerCase().includes(value.toLowerCase());
};

const PopularActors: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>(
    "popularActors",
    getPopularActors
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    { name: "name", value: "", condition: nameFiltering },
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
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
      <PageTemplate
        title="Popular Actors"
        actors={displayedActors}
        /*action={(actor: BaseActorProps) => {
          return <AddToFavouritesIcon {...actor} />;
        }}*/
      />
    </>
  );
};

export default PopularActors;
