import React, { createContext, useContext, useState, ReactNode } from "react";
import { BaseFantasyMovieProps } from "../types/interfaces";

interface FantasyMoviesContextType {
  fantasyMovies: BaseFantasyMovieProps[];
  addFantasyMovie: (movie: BaseFantasyMovieProps) => void;
}

const FantasyMoviesContext = createContext<
  FantasyMoviesContextType | undefined
>(undefined);

export const FantasyMoviesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fantasyMovies, setFantasyMovies] = useState<BaseFantasyMovieProps[]>(
    []
  );

  const addFantasyMovie = (movie: BaseFantasyMovieProps) => {
    setFantasyMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <FantasyMoviesContext.Provider value={{ fantasyMovies, addFantasyMovie }}>
      {children}
    </FantasyMoviesContext.Provider>
  );
};

// Custom hook
export const useFantasyMovies = () => {
  const context = useContext(FantasyMoviesContext);
  if (context === undefined) {
    throw new Error(
      "useFantasyMovies must be used within a FantasyMoviesProvider"
    );
  }
  return context;
};
