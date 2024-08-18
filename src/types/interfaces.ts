export interface BaseFantasyMovieProps extends BaseMovieProps {
  production_companies: string[];
  genres: string[];
  is_fantasy: boolean;
}

export interface BaseActorListProps {
  actors: BaseActorProps[];
  action?: (actor: BaseActorProps) => React.ReactNode;
}

export interface ActorListPageTemplateProps {
  actors: BaseActorProps[];
  title: string;
  action?: (actor: BaseActorProps) => React.ReactNode; // Action for the actor list
}

export interface DiscoverActors {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseActorProps[];
}

export interface BaseActorProps {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  place_of_birth: string;
  profile_path: string;
  known_for_department: string;
  imdb_id: string;
  poster_path?: string;
}

export interface ActorImage {
  file_path: string;
}

export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
    mustWatch?: boolean;
  }

  export interface BaseMovieListProps { 
    movies: BaseMovieProps[]; // Changed from BaseMovie to BaseMovieProps
  }

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries?: {
      id: number;
      name: string;
    }[];
    production_companies: { name: string }[]; // Added this line
  }

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }

  export type FilterOption = "title" | "genre" | "name" | "year";

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }

  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }

  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }