let watchURL = 
"https://api.themoviedb.org/3/watch/providers/regions?api_key=83bdd4364c17e26516ca7ef331a6b4a6&language=en-US";

async function getWatchProvider(){
	const response  = await fetch(watchURL);
	const watch = await response.json()

	let theWatch = document.getElementById("watchProvider");

	watch.results.map(
		(movie, index) => (theWatch.innerHTML += `
			
			<ul>
			    <li> ${ movie.english_name } </li>
			    <li> ${ movie.iso_3166_1 } </li>
			    <li> ${ movie.native_name } </li>
			</ul>

			`)
		)

	console.log(watch);
}

getWatchProvider();
