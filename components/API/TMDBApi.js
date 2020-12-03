const API_TOKEN ='b9fc166fe75e235ac83cfb9025b1e07c';
const BASE_URL ='https://api.themoviedb.org/3';

export function getMoviesFromSearch(text){
    const url =BASE_URL+ '/search/movie?api_key='+API_TOKEN+'&query='+text;

    return fetch(url).then(
     (res)=>res.json()
    ).catch(
        (err)=>console.log(err)
    )
}

export function getImageFromApi (name) {
    console.log('https://image.tmdb.org/t/p/w300' + name);
    return 'https://image.tmdb.org/t/p/w300' + name;
  }