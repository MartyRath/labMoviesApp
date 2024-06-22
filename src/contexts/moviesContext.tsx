import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  mustWatches: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  addToMustWatch: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void; // NEW
}
const initialContextState: MovieContextInterface = {
  favourites: [],
  mustWatches: [],
  addToFavourites: () => {},
  addToMustWatch: () => {},
  removeFromFavourites: () => {},
  addReview: (movie, review) => {
    movie.id, review;
  }, // NEW
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]); // NEW
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatches, setMustWatch] = useState<number[]>([]);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    // NEW
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prevMustWatches) => {
      if (!prevMustWatches.includes(movie.id)) {
        const updatedList = [...prevMustWatches, movie.id];
        console.log(
          `Added: ${movie.title} to Must Watch list, ID: ${movie.id}`,
          updatedList
        );
        return updatedList;
      }
      return prevMustWatches;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id)
    );
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatches,
        addToFavourites,
        addToMustWatch,
        removeFromFavourites,
        addReview, // NEW
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
