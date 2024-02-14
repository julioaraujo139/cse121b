document.addEventListener("DOMContentLoaded", () => {
    // Your OMDb API key (replace with your actual API key)
    const apiKey = "cf33023";
    
    function searchMovies() {
        const searchInput = document.getElementById("searchInput").value;

        // Fetch data from OMDb API
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cf33023&s=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    displayResults(data.Search);
                } else {
                    displayError(data.Error);
                }
            })
            .catch(error => {
                displayError("An error occurred. Please try again later.");
            });
    }

    function displayResults(movies) {
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        movies.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <h2>${movie.Title} (${movie.Year})</h2>
                    <p>${movie.Plot}</p>
                </div>
            `;
            resultsContainer.innerHTML += movieCard;
        });
    }

    function displayError(message) {
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = `<p class="error-message">${message}</p>`;
    }
});
