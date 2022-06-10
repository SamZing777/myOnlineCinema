let genre = "https://api.themoviedb.org/3/genre/movie/list?api_key=83bdd4364c17e26516ca7ef331a6b4a6";

async function getGenres() {
	const response = await fetch(genre);
	const genres = await response.json()
	theGenre = document.getElementById("genre");

	genres.genres.map(
		(movie, index) => (theGenre.innerHTML += `
			
			<ul>
			    <li> ${ movie.id } </li>
			    <li> ${ movie.name } </li>
			</ul>

			`)
		)
	
}

getGenres();
