// src/newMovie.ts
function addNewMovie() {
  const container = document.createElement("div");
  container.className = "p-6 max-w-md mx-auto bg-white rounded-lg shadow-md";
  const title = document.createElement("h2");
  title.className = "text-2xl font-bold mb-4";
  title.innerText = "Movie Form";
  container.appendChild(title);
  const form = document.createElement("form");
  function createInput(labelText, type, name) {
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
  ["", "Action", "Comedy", "Drama"].forEach((genre) => {
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
  saveButton.type = "submit";
  saveButton.className = "w-full bg-blue-500 text-white p-2 rounded mt-2";
  saveButton.innerText = "Save";
  form.appendChild(saveButton);
  container.appendChild(form);
  document.body.innerHTML = "";
  document.body.appendChild(container);
  saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("title: ", titleInput.value);
    console.log("genre: ", genreSelect.value);
    console.log("rate: ", rateInput.value);
    console.log("stock: ", stockInput.value);
  });
}

// src/index.ts
var movies = [
  { title: "Airplane", genre: "Comedy", stock: 7, rate: 3.5 },
  { title: "Die Hard", genre: "Action", stock: 5, rate: 2.5 },
  { title: "Get Out", genre: "Thriller", stock: 8, rate: 3.5 },
  { title: "Gone Girl", genre: "Thriller", stock: 7, rate: 4.5 },
  { title: "Fury Road", genre: "Action", stock: 10, rate: 3 },
  { title: "Home Alone ", genre: "Comedy", stock: 4, rate: 2 },
  { title: "John Wick", genre: "Action", stock: 2, rate: 3.5 },
  { title: "Se7en", genre: "Thriller", stock: 6, rate: 4 },
  { title: "The Mask", genre: "Comedy", stock: 9, rate: 3.8 }
];
var genres = ["All Genres", "Action", "Comedy", "Thriller"];
var selectedGenre = "All Genres";
var currentPage = 1;
var pageSize = 3;
function createGenreList() {
  const ul = document.createElement("ul");
  ul.className = "border rounded-lg overflow-hidden";
  genres.forEach((genre) => {
    const li = document.createElement("li");
    li.textContent = genre;
    li.className = "p-3 border-b last:border-b-0 cursor-pointer hover:bg-blue-100 " + (genre === selectedGenre ? "bg-blue-500 text-white" : "");
    li.addEventListener("click", () => {
      selectedGenre = genre;
      currentPage = 1;
      renderAll();
    });
    ul.appendChild(li);
  });
  return ul;
}
function createMovieTable(moviesData) {
  const table = document.createElement("table");
  table.className = "w-full border-collapse border";
  const thead = document.createElement("thead");
  thead.className = "bg-gray-100";
  const headerRow = document.createElement("tr");
  const headers = ["Title", "Genre", "Stock", "Rate", "Action"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.className = "p-2 ";
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  moviesData.forEach((movie) => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    tdTitle.className = "p-2  text-blue-500 cursor-pointer ";
    tdTitle.textContent = movie.title;
    tr.appendChild(tdTitle);
    const tdGenre = document.createElement("td");
    tdGenre.className = "p-2 ";
    tdGenre.textContent = movie.genre;
    tr.appendChild(tdGenre);
    const tdStock = document.createElement("td");
    tdStock.className = "p-2 ";
    tdStock.textContent = movie.stock.toString();
    tr.appendChild(tdStock);
    const tdRate = document.createElement("td");
    tdRate.className = "p-2 ";
    tdRate.textContent = movie.rate.toString();
    tr.appendChild(tdRate);
    const tdDelete = document.createElement("td");
    tdDelete.className = "p-2  text-center";
    const delBtn = document.createElement("button");
    delBtn.className = "bg-red-500 text-white px-2 py-1 rounded";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      const index = movies.findIndex((m) => m.title === movie.title);
      if (index !== -1) {
        movies.splice(index, 1);
      }
      renderAll();
    });
    tdDelete.appendChild(delBtn);
    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
}
function createPagination(totalMovies) {
  const container = document.createElement("div");
  container.className = "mt-4";
  const totalPages = Math.ceil(totalMovies / pageSize);
  for (let page = 1;page <= totalPages; page++) {
    const btn = document.createElement("button");
    btn.textContent = page.toString();
    btn.className = "px-3 py-1 border mr-2 " + (page === currentPage ? "bg-blue-500 text-white" : "");
    btn.addEventListener("click", () => {
      currentPage = page;
      renderAll();
    });
    container.appendChild(btn);
  }
  return container;
}
function createLayout() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "flex gap-4 p-6";
  const leftSide = document.createElement("div");
  leftSide.className = "w-1/4";
  const rightSide = document.createElement("div");
  rightSide.className = "w-3/4";
  mainContainer.appendChild(leftSide);
  mainContainer.appendChild(rightSide);
  return mainContainer;
}
function getFilteredMovies() {
  if (selectedGenre === "All Genres") {
    return movies;
  } else {
    return movies.filter((m) => m.genre === selectedGenre);
  }
}
function getPaginatedMovies(moviesData) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return moviesData.slice(startIndex, endIndex);
}
function renderAll() {
  document.body.innerHTML = "";
  const mainContainer = createLayout();
  document.body.appendChild(mainContainer);
  const leftSide = mainContainer.children[0];
  const genreList = createGenreList();
  leftSide.appendChild(genreList);
  const rightSide = mainContainer.children[1];
  const newMovieBtn = document.createElement("button");
  newMovieBtn.className = "mb-4 px-4 py-2 bg-blue-500 text-white rounded";
  newMovieBtn.textContent = "New Movie";
  newMovieBtn.addEventListener("click", () => {
    addNewMovie();
  });
  rightSide.appendChild(newMovieBtn);
  const filtered = getFilteredMovies();
  const infoParagraph = document.createElement("p");
  infoParagraph.textContent = `Showing ${filtered.length} movies in the database.`;
  rightSide.appendChild(infoParagraph);
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search... (Optional)";
  searchInput.className = "border p-2 w-full mb-4";
  rightSide.appendChild(searchInput);
  const paginatedMovies = getPaginatedMovies(filtered);
  const table = createMovieTable(paginatedMovies);
  rightSide.appendChild(table);
  const pagination = createPagination(filtered.length);
  rightSide.appendChild(pagination);
}
document.addEventListener("load", () => renderAll());
