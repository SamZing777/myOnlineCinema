var apiKey = "d9fa7dba3964ff4cb33bfa9f677c9374";
var urlMovies = "https://api.themoviedb.org/3";
const image_URL = "http://image.tmdb.org/t/p/w500";
const Api_URL = urlMovies + '/tv/popular?api_key=' + apiKey;
const searchURL = urlMovies + "/search/tv?api_key=" + apiKey;
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getSeries(Api_URL);

function getSeries(url){
    fetch(url).then(res => res.json()).then(data => {

        showSeries(data.results);
    }); 
}

function showSeries(data){
    main.innerHTML = '',
   
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
        `  <img src="${image_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
           ${overview}
        </div>`;

        main.appendChild(movieEl);
    });
}


function getColor(vote){
    if(vote >= 8){
        return 'green';
    } else if(vote >= 5){
        return "orange";
    } else {
        return 'red';
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getSeries(searchURL+'&query='+searchTerm);
    }
});

// toggle menu
const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    // toggle function
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

     // animate links
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

        // burger animation
        burger.classList.toggle('toggle');
    });
};

navSlide();
