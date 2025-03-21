import { renderAll } from ".";
import type { Movie } from "./types";

export const movies: Movie[] = [
  { title: "Airplane", genre: "Comedy", stock: 7, rate: 3.5 },
  { title: "Die Hard", genre: "Action", stock: 5, rate: 2.5 },
  { title: "Get Out", genre: "Thriller", stock: 8, rate: 3.5 },
  { title: "Gone Girl", genre: "Thriller", stock: 7, rate: 4.5 },
  { title: "Fury Road", genre: "Action", stock: 10, rate: 3.0 },
  { title: "Home Alone ", genre: "Comedy", stock: 4, rate: 2.0 },
  { title: "John Wick", genre: "Action", stock: 2, rate: 3.5 },
  { title: "Se7en", genre: "Thriller", stock: 6, rate: 4.0 },
  { title: "The Mask", genre: "Comedy", stock: 9, rate: 3.8 },
];

export function addMovie(movie: Movie): void {
  movies.push(movie);
  renderAll();
}
