let search = "https://api.themoviedb.org/3/search/company?api_key=83bdd4364c17e26516ca7ef331a6b4a6&page=1";

async function searchMovies() {
	const response = await fetch(search);
	const searchMovie = await response.json()
	theSearch = document.getElementById("search");

	// searchMovie.map(
	// 	(movie, index) => (theSearch.innerHTML += `
			
	// 		<ul>
	// 		    <li> ${ movie.id } </li>
	// 		    <li> ${ movie.name } </li>
	// 		</ul>

	// 		`)
	// 	)

	console.log(searchMovie)
	
}

searchMovies();
