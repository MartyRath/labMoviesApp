# React App Assignment

###### Full Stack Development 2, HDip in Computer Science

**Name:** Marty Rath

**Video Demo:** ..... URL of your YouTube video demonstration ....

This repository contains an implementation of the Movie Fans Web Application using the React library.

### Features

UI:

- Added pages - 4 list, 2 details, auth pages: daily trending movies, popular actors, actor bio, addFantasyMoviePage, fantasyMovieDetailsPage, fantasyMoviesList, login/signup pages

Routing:

- Added parameterised URLs: /actors/:id, /fantasyMovies/:id
- Data hyperlinking: PopularActors->ActorBio, fantasyMoviesList->fantasyMovieDetailsPage, Create fantasy movie button->AddFantasyMoviePage, siteHeader buttons, signin/signout
- Public/Private routes: User's must be signed in to view favourites, create a fantasy movie, add a review.
- Supabase authentication (sign in, sign out, sign up). Used for private routes.

Data model:

- Additional data entity types: Actor, FantasyMovie, User
- Server state Caching: useQuery in PopularActors

Functionality:

- Additional filtering: filter movies by year, actors by name
- Multi-criteria Search: Can search by combining text, year, genre
- Fantasy movie feature - Users can create a fantasy movie

Deployment:

- Deployed using Vercel: https://lab-movies-dvftb38vy-martyraths-projects.vercel.app/

### Setup requirements.

Add a .env file in the root directory with VITE_TMDB_KEY, VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.

### API endpoints

- Actor details - person/:id
- Actor images - /person/:id/images
- Popular actors - person/popular
- Daily Trending movies - /trending/movie/day

### Routing

- /actors/:id - actor bio details, ActorBioPage.
- /popularActors - displays popular actors, Popular Actors.
- /trendingMovies - displays trending movies, TrendingMovies
- /fantasyMovies/form - [Protected] create a fantasy movie
- /fantasyMovies - see all fantasy movies
- /fantasyMovies/:id - fantasy movie details
- /login - login/signup to the app
- /reviews/form [Protected]
- /movies/favourites [Protected]

### Third Party Components/Integration

- Supabase Authentication

### Independent learning (If relevant)

- Supabase: /Auth.tsx /App.tsx /src/Components/siteHeader
  https://supabase.com/docs/guides/getting-started/tutorials/with-react
- Vercel deployment:
  Reference for adding vercel.json file https://medium.com/@abdulmuizzayo6/how-to-host-your-react-app-on-vercel-effectively-7ae35b259044
