import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { BaseMovieProps } from "../types/interfaces"; // Ensure this import is correct

const meta = {
  title: "Home Page/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
} satisfies Meta<typeof MovieCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    movie: SampleMovie as BaseMovieProps, // Ensure SampleMovie is cast to BaseMovieProps
    action: (movie: BaseMovieProps) => <AddToFavouritesIcon movie={movie} />, // Pass movie correctly
  },
};
Basic.storyName = "Default";

const sampleNoPoster = {
  ...SampleMovie,
  poster_path: undefined,
} as BaseMovieProps; // Ensure type cast to BaseMovieProps
export const Exceptional: Story = {
  args: {
    movie: sampleNoPoster,
    action: (movie: BaseMovieProps) => <AddToFavouritesIcon movie={movie} />, // Pass movie correctly
  },
};
Exceptional.storyName = "Exception";
