export interface IGenre {
  id: number;
  filmwebId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMovieGenre {
  id: number;
  movieId: number;
  genreId: number;
  createdAt: string;
  updatedAt: string;
  genre: IGenre;
}

export interface IMovie {
  id: number;
  filmwebId: number;
  url: string;
  title: string;
  titleOriginal: string;
  description: string;
  productionYear: number;
  worldPremiereDate: string | null;
  polishPremiereDate: string | null;
  usersRating: number | null;
  usersRatingVotes: number | null;
  criticsRating: number | null;
  criticsRatingVotes: number | null;
  language: string;
  duration: number;
  posterUrl: string | null;
  backdropUrl: string | null;
  videoUrl: string | null;
  createdAt: string;
  updatedAt: string;
  movies_genres: IMovieGenre[];
}
