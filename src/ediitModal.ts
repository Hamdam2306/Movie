import { renderAll } from ".";
import { addMovie } from "./db";
import type { Movie } from "./types";

const editContainer = document.createElement("div");
const save = document.createElement("button");

export function editMovie(movie: Movie): void {
  document.body.innerHTML = "";

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Title");
  title.setAttribute("class", "border p-2 w-full mb-4");
  title.setAttribute("required", "true");
  title.value = movie.title;

  const genre = document.createElement("select");
  genre.setAttribute("class", "border p-2 w-full mb-4");
  genre.setAttribute("required", "true");

  const option1 = document.createElement("option");
  option1.setAttribute("value", movie.genre);
  option1.textContent = "Select Genre";
  genre.appendChild(option1);

  const option2 = document.createElement("option");
  option2.setAttribute("value", "Action");
  option2.textContent = "Action";
  genre.appendChild(option2);

  const option3 = document.createElement("option");
  option3.setAttribute("value", "Comedy");
  option3.textContent = "Comedy";
  genre.appendChild(option3);

  const option4 = document.createElement("option");
  option4.setAttribute("value", "Thriller");
  option4.textContent = "Thriller";
  genre.appendChild(option4);

  const stock = document.createElement("input");
  stock.setAttribute("type", "number");
  stock.setAttribute("placeholder", "Number in Stock");
  stock.setAttribute("class", "border p-2 w-full mb-4");
  stock.setAttribute("required", "true");
  stock.value = movie.stock.toString();

  const rate = document.createElement("input");
  rate.setAttribute("type", "number");
  rate.setAttribute("placeholder", "Rate");
  rate.setAttribute("class", "border p-2 w-full mb-4");
  rate.setAttribute("required", "true");
  rate.value = movie.rate.toString();

  save.textContent = "Save";
  save.setAttribute("class", "w-full bg-blue-500 text-white p-2 rounded");

  editContainer.setAttribute("class", "w-1/2 p-4 mx-auto");
  editContainer.appendChild(title);
  editContainer.appendChild(genre);
  editContainer.appendChild(stock);
  editContainer.appendChild(rate);
  editContainer.appendChild(save);

  document.body.appendChild(editContainer);

  save.addEventListener("click", () => {
    movie.title = title.value;
    movie.genre = genre.value;
    movie.stock = parseInt(stock.value);
    movie.rate = parseFloat(rate.value);

    editContainer.innerHTML = "";
    renderAll();
  });
}
// document.body.appendChild(editContainer);
