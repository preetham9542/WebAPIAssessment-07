document.addEventListener("DOMContentLoaded", () => {
    const ListOfMovies = document.getElementById("ListOfMovies");
    function DisplayMovies() {
        fetch("http://localhost:5266/api/Movies")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status :${response.status}`);
                }
                return response.json();
            })
            .then(movies => {
                ListOfMovies.innerHTML = "";
                movies.forEach(movie => {
                    const movielist = document.createElement("li");
                    movielist.textContent =
                        `ID:${movie.movie_id},Movie Name:${movie.movie_name},Star Cast:${movie.starCast},
                        Director ${movie.director},Release Date ${movie.releaseDate},Producer :${movie.producer}`;
                    ListOfMovies.appendChild(movielist);
                })
            })
            .catch(error => {
                console.error("Fetch error:", error);
                ListOfMovies.innerHTML = "Error fetching tasks";
            });
    }
    createMovieForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("mname").value;
        const starcast = document.getElementById("mstarcast").value;
        const director = document.getElementById("mdirector").value;
        const releasedate = document.getElementById("mreleasedate").value;
        const producer = document.getElementById("mproducer").value;
        fetch("http://localhost:5266/api/Movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Movie_name: name, StarCast: starcast, director, ReleaseDate: releasedate, producer })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status:${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                e.target.reset();
                DisplayMovies();
            })
            .catch(error => {
                console.error("fetch error:");
            });
    })
    DisplayMovies();
});
