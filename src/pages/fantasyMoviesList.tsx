import React from "react";
// Contexts
import { useFantasyMovies } from "../contexts/fantasyMoviesContext";
// Interfaces

// Hooks
import useFiltering from "../hooks/useFiltering";
// Components
import PageTemplate from "../components/templateMovieListPage";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  yearFilter,
} from "../components/movieFilterUI";
import AddFantasyMovie from "../components/cardIcons/addFantasyMovie";

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

const FantasyMoviesList: React.FC = () => {
  const { fantasyMovies } = useFantasyMovies();
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    yearFiltering,
  ]);

  const changeFilterValues = (type: string, value: string) => {
    setFilterValues((prevFilters) =>
      prevFilters.map((filter) =>
        filter.name === type ? { ...filter, value } : filter
      )
    );
  };

  const displayedMovies = filterFunction(fantasyMovies);

  return (
    <>
      <PageTemplate
        title="Fantasy Movies"
        movies={displayedMovies}
        action={(movie) => {
          console.log(movie);
          return null;
        }}
      />
      Add your fantasy movie here
      <AddFantasyMovie movieId={0} />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        yearFilter={filterValues[2].value}
      />
    </>
  );
};

export default FantasyMoviesList;
