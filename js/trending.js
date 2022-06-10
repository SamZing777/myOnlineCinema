let trending = "https://api.themoviedb.org/3/trending/all/day?api_key=83bdd4364c17e26516ca7ef331a6b4a6";

async function getTrendingMovies() {
	const response = await fetch(trending);
	const trendingMovies = await response.json()
	
	theMovies = document.getElementById("trending");

	trendingMovies.results.map(
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
getTrendingMovies();
