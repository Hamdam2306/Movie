import { addMovie } from "./db";
import type { Movie } from "./types";

export function addNewMovie() {
  const container = document.createElement("div");
  container.className = "p-6 max-w-md mx-auto bg-white rounded-lg shadow-md";

  const title = document.createElement("h2");
  title.className = "text-2xl font-bold mb-4";
  title.innerText = "Movie Form";
  container.appendChild(title);

  const form = document.createElement("form");

  function createInput(labelText: string, type: string, name: string) {
    const label = document.createElement("label");
    label.className = "block mb-2";
    label.innerText = labelText;

    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.className = "w-full p-2 border rounded mb-4";

    form.appendChild(label);
    form.appendChild(input);
    return input;
  }

  const titleInput = createInput("Title", "text", "title");

  const genreLabel = document.createElement("label");
  genreLabel.className = "block mb-2";
  genreLabel.innerText = "Genre";

  const genreSelect = document.createElement("select");
  genreSelect.name = "genre";
  genreSelect.className = "w-full p-2 border rounded mb-4";
  ["", "Action", "Comedy", "Thriller"].forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.innerText = genre || "Select Genre";
    genreSelect.appendChild(option);
  });

  form.appendChild(genreLabel);
  form.appendChild(genreSelect);

  const stockInput = createInput("Number in Stock", "number", "stock");
  const rateInput = createInput("Rate", "number", "rate");

  const saveButton = document.createElement("button");
  saveButton.className = "w-full bg-blue-500 text-white p-2 rounded mt-2";
  saveButton.innerText = "Save";

  form.appendChild(saveButton);
  container.appendChild(form);
  document.body.innerHTML = "";
  document.body.appendChild(container);

  saveButton.addEventListener("click", (e) => {
    let movie: Movie = {
      title: titleInput.value,
      genre: genreSelect.value,
      stock: parseInt(stockInput.value),
      rate: parseFloat(rateInput.value),
    };
    addMovie(movie);

    e.preventDefault();
    console.log("title: ", titleInput.value);
    console.log("genre: ", genreSelect.value);
    console.log("rate: ", rateInput.value);
    console.log("stock: ", stockInput.value);
  });
}
