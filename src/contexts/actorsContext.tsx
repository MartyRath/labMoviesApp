import React, { useState, useCallback } from "react";
import { BaseActorProps } from "../types/interfaces";

interface ActorContextInterface {
  favourites: number[];
  addToFavourites: (actor: BaseActorProps) => void;
  removeFromFavourites: (actor: BaseActorProps) => void;
}
const initialContextState: ActorContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
};

export const ActorsContext =
  React.createContext<ActorContextInterface>(initialContextState);

const ActorsContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const addToFavourites = useCallback((actor: BaseActorProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(actor.id)) {
        return [...prevFavourites, actor.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((actor: BaseActorProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== actor.id)
    );
  }, []);

  return (
    <ActorsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
