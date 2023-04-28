const API_KEY = 'api_key=c1619f2d57d6657ea1676cc843b09ad6';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL +'/discover/movie?sort_by=popularity.desc&'+ API_KEY;

const IMG_UEL = 'https://image.tmdb.org/t/p/w500';

const main=document.getElementById("main");

function getMovies(API_URL){
    fetch(API_URL)
    .then(Res => Res.json())
    .then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}
function showMovies(movies){
    main.innerHTML="";
    movies.forEach(movie => {
        
            const {title , poster_path , vote_average, overview} =movie;
            const movieEL=document.createElement('div');
            movieEL.classList.add('.movie');
            movieEL.innerHTML=`<div class="card " style="width: 18rem;">
                <img src="${IMG_UEL+poster_path}" class="card-img-top" alt="${title}">
                
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${overview}</p>
                    <a href="#" class="btn ${getColor(vote_average)}">${vote_average}</a>
                </div>
            </div>`
    
            main.appendChild(movieEL);
        
    });

}
function getColor(vote){
    if (vote >= 8)
    {
        return 'green'
    }else if(vote >= 5){
        return "orang"
    }else{
        return 'red'
    }

}

getMovies(API_URL);