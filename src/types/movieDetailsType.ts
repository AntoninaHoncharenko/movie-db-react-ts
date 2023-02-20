export interface IMovieDetails {
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path?: string;
  genres: [{ name: string }];
}
