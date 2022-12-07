Code a movie recommendation app using react js 

5 / 5



import React from 'react';
const MovieRecommendationApp = () => {
// Initialize state variables
const [movies, setMovies] = useState([]);
const [selectedGenres, setSelectedGenres] = useState([]);
// Function to fetch movie data from API
const fetchMovies = () => {
fetch('https://movies-api.com/movies')
.then(response => response.json())
.then(data => setMovies(data))
.catch(error => console.log(error));
}
// Function to handle genre selection
const handleGenreSelect = (genre) => {
// Check if genre is already selected
if (selectedGenres.includes(genre)) {
// If already selected, remove from selected genres array
setSelectedGenres(selectedGenres.filter(g => g !== genre));
} else {
// If not already selected, add to selected genres array
setSelectedGenres([...selectedGenres, genre]);
}
}
// Function to filter movies by selected genres
const filterMoviesByGenre = () => {
// Check if any genres are selected
if (selectedGenres.length > 0) {
// If genres are selected, filter movies by selected genres
return movies.filter(movie => movie.genres.some(genre => selectedGenres.includes(genre)));
} else {
// If no genres are selected, return all movies
return movies;
}
}
return (
<div>
<button onClick={fetchMovies}>Fetch Movies</button>
<div>
{/* Display genre buttons /}
{movies.map(movie => movie.genres.map(genre => (
<button key={genre} onClick={() => handleGenreSelect(genre)}>{genre}</button>
)))}
</div>
<div>
{/ Display movie titles */}
{filterMoviesByGenre().map(movie => (
<p key={movie.id}>{movie.title}</p>
))}
</div>
</div>
);
}
export default MovieRecommendationApp;
