let discover = 
"https://api.themoviedb.org/3/discover/movie?api_key=83bdd4364c17e26516ca7ef331a6b4a6&language=en-US&"
"sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

async function discoverMovies() {
	const response = await fetch(discover);
	const discoverMovies = await response.json()
	
	discoverMovie = document.getElementById("discoverMovies");

	discoverMovies.results.map(
		(movie, index) => (discoverMovie.innerHTML += `
			
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

discoverMovies();
