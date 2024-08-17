import React from "react";
import { useParams } from "react-router-dom";
import { useFantasyMovies } from "../contexts/fantasyMoviesContext";
import PageTemplate from "../components/templateMoviePage";
import { BaseFantasyMovieProps } from "../types/interfaces";

const FantasyMovieDetails: React.FC = () => {
  const { id } = useParams();
  const { fantasyMovies } = useFantasyMovies();

  const movie = fantasyMovies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h1>Fantasy Movie Not Found</h1>;
  }

  return (
    <>
      <PageTemplate movie={movie}>
        <FantasyMovieInfo {...movie} />
      </PageTemplate>
    </>
  );
};

const FantasyMovieInfo: React.FC<BaseFantasyMovieProps> = ({
  title,
  overview,
  release_date,
  runtime,
  production_companies,
  genres,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Runtime: {runtime} minutes</p>
      <h3>Production Companies:</h3>
      <ul>
        {production_companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
      <h3>Genres:</h3>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </>
  );
};

export default FantasyMovieDetails;
