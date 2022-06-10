api_key_v3_auth = "83bdd4364c17e26516ca7ef331a6b4a6";

api_key_read = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2JkZDQzNjRjMTdlMjY1MTZjYTdlZjMzMWE2YjRhNiIsInN1YiI6IjYyODM4ODc0OGQ3N2M0MDA2NmNmZDdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D8nKsGiRsZTIWCo2BFC9j69P22GE1RryE8qgx-grHUA";
api_example = "https://api.themoviedb.org/3/movie/550?api_key=83bdd4364c17e26516ca7ef331a6b4a6";

// let people = "https://api.themoviedb.org/3/person/{person_id}?api_key=83bdd4364c17e26516ca7ef331a6b4a6";
let allMovies = "https://api.themoviedb.org/3/movie/?api_key=83bdd4364c17e26516ca7ef331a6b4a6";
let TV = "https://api.themoviedb.org/3/tv/season/?api_key=83bdd4364c17e26516ca7ef331a6b4a6";
let review = "https://api.themoviedb.org/3/review/?api_key=83bdd4364c17e26516ca7ef331a6b4a6";
let network = "https://api.themoviedb.org/3/network/?api_key=83bdd4364c17e26516ca7ef331a6b4a6";


async function getAllMovies() {
	const response = await fetch(allMovies);
	const allMovies = await response.json()
	
	theMovies = document.getElementById("theMovies");

	Movies.results.map(
		(movie, index) => (theMovies.innerHTML += `
			
			<ul>
			    <li> ${ movie.title } </li>
			    <li> ${ movie.original_language } </li>
			    <li> ${ movie.release_date } </li>
			    <li> ${ movie.vote_average } </li>
			    <li> ${ movie.vote_count } </li>
			    <li> ${ movie.overview } </li>
			    <li> <img src="https://image.tmdb.org/t/p/w500/${ movie.poster_path }" /></li>
			</ul>

			`)
		)
	
}
getAllMovies();
