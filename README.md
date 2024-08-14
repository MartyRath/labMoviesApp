# React App Assignment

###### Full Stack Development 2, HDip in Computer Science

**Name:** Marty Rath

**Video Demo:** ..... URL of your YouTube video demonstration ....

This repository contains an implementation of the Movie Fans Web Application using the React library.

### Features

[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any **modifications to existing features**) .]

- Added 3 pages, 2 list and 1 detail view - daily trending movies, popular actors, actor bio
- Added parameterised URL: /actors/:id
- Data hyperlinking from Popular Actors page to Actor Bio page
- Additional data entity type: Actor
- Additional filtering: filter by year, actor name
- Server state Caching: useQuery in PopularActors

### Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

### API endpoints

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.]

e.g.

- Actor details - person/:id
- Actor images - /person/:id/images
- Popular actors - person/popular
- Daily Trending movies - /trending/movie/day

### Routing

[ List the __new routes__ supported by your app and state the associated page.]

- /actors/:id - actor bio details, ActorBioPage.
- /popularActors - displays popular actors, Popular Actors.
- /trendingMovies - displays trending movies, TrendingMovies
-

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

### Third Party Components/Integration

[Describe the level of integration/use or other API's or third party components]

- React Components
- Third party/custom APIs
- Authentication
- etc...

### Independent learning (If relevant)

Itemize the technologies/techniques you researched independently and adopted in your project,
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
