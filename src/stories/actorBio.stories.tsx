import type { Meta, StoryObj } from "@storybook/react";
import ActorBio from "../components/actorBio";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { actor } from "./sampleActorData";

const meta = {
  title: "Actor Bio Page/ActorBio",
  component: ActorBio,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/actor/31"]}>
        <QueryClientProvider client={new QueryClient()}>
          {Story()}
        </QueryClientProvider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ActorBio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: actor.id,
    name: actor.name,
    biography: actor.biography,
    birthday: actor.birthday,
    place_of_birth: actor.place_of_birth,
    profile_path: actor.profile_path,
    known_for_department: actor.known_for_department,
    imdb_id: actor.imdb_id,
    poster_path: actor.poster_path,
  },
};
