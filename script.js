async function moviefind() {
  try {
    let searchvalue = document.getElementById("searching").value;
    let res = await fetch(
      `http://www.omdbapi.com/?apikey=7ee450a8&t=${searchvalue}`
    );
    let data = await res.json();

    if (data.Response === "False") {
      alert("Movie Not Found");
    } else {
      display(data);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    alert(
      "An error occurred while fetching movie data. Please try again later."
    );
  }
}

function display(data) {
  let container = document.querySelector(".container");
  container.innerHTML = '';






  container.style.backgroundColor = "rgba(51, 47, 47, 0.457)";
container.style.border = "2px solid black";

  let div1 = document.createElement("div");
  container.appendChild(div1);

  let poster = document.createElement("img");
  poster.src = data.Poster;
  div1.appendChild(poster);
  poster.style.height = "fit-content";
  poster.style.width = "auto";




  let div2 = document.createElement("div");
  container.appendChild(div2);

  let title = document.createElement("h1");
  title.innerText = data.Title;

  title.style.marginBottom = "20px"; 











  let Released = document.createElement("h3");
      Released.innerText = `Released Date: ${data.Released}`;
  Released.style.fontSize = "20px"; 
  Released.style.marginBottom = "15px"; 

  let imdbRating = document.createElement("h3");
  imdbRating.innerText = `IMDb Rating: ${data.imdbRating}`;
  imdbRating.style.fontSize = "20px"; // 
  imdbRating.style.marginBottom = "15px"; 

  let BoxOffice = document.createElement("h3");
  BoxOffice.innerText = `Box Office Collection: ${data.BoxOffice}`;
  BoxOffice.style.fontSize = "20px"; // 
  BoxOffice.style.marginBottom = "15px"; 

  let Genre = document.createElement("h3");
  Genre.innerText = `Genre: ${data.Genre}`;
  Genre.style.fontSize = "20px"; // 
  Genre.style.marginBottom = "15px"; 

  let type = document.createElement("h3");
  type.innerText = `Type: ${data.Type}`;
  type.style.fontSize = "20px"; // 
  type.style.marginBottom = "15px"; 

  let Director = document.createElement("h3");
  Director.innerText = `Director: ${data.Director}`;
  Director.style.fontSize = "20px"; // 
  Director.style.marginBottom = "15px"; 

  let Runtime = document.createElement("h3");
  Runtime.innerText = `Runtime: ${data.Runtime}`;
  Runtime.style.fontSize = "20px"; 
  Runtime.style.marginBottom = "15px"; 


  div2.append(
    title,
    type,
    Director,
    Genre,
    Released,
    imdbRating,
    BoxOffice,
    Runtime
  );
}
