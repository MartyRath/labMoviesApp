//Imports
import React from "react";
import { useQuery } from "react-query";
//API
import { getMovies } from "../api/tmdb-api";
//Components
import PageTemplate from "../components/templateMovieListPage";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  yearFilter,
} from "../components/movieFilterUI";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
//Hooks
import useFiltering from "../hooks/useFiltering";
//Interfaces/types
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";

// Filter by movie title or genre
const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const yearFiltering = {
  name: "year",
  value: "",
  condition: yearFilter,
};

const HomePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "discover",
    getMovies
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    yearFiltering,
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Updates the matched filter based on the type, while keeping the other filters unchanged.
  const changeFilterValues = (type: string, value: string) => {
    setFilterValues((prevFilters) =>
      prevFilters.map((filter) =>
        filter.name === type ? { ...filter, value } : filter
      )
    );
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />;
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        yearFilter={filterValues[2].value}
      />
    </>
  );
};
export default HomePage;
