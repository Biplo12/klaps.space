import { IMovie } from "./IMovies";

export interface IScreening {
  id: number;
  url: string;
  movieId: number;
  showtimeId: number;
  cinemaId: number;
  date: string;
  isDubbing: number;
  isSubtitled: number;
}

export interface IScreeningWithMovie {
  movie: IMovie;
  screenings: IScreening[];
}
