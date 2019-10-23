const unsplashKey = 'a8df2b76c89f3931c2c7f9f52586d998a56c3d3444f0dfc2926d8ebbb3690686'

const openWeatherKey = '0c706ffac8bc3b4aef2aa23debc8e0f0';
const bg = document.querySelector('.bg');


axios({
    method:'get',
    url:`https://api.unsplash.com/photos/random/?client_id=${unsplashKey}`,
})

.then (response => {
    const bgImage = response.data.urls.full;

    bg.style.backgroundImage = `url(${bgImage})`
    
})

.catch (error => {
    console.log(error);
    
})



// temp api

const icons = {
    Clear: '☀',
    Rain: '️🌧',
    Storm: '⛈',
    Snow: '🌨',
    Mist: '🌫',
    Clouds: '☁',
  };


const weather = document.querySelector('#temp');
const cityName = document.querySelector('#city');
const logo = document.querySelector('#logo');

axios ({
    method:'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&appid=${openWeatherKey}`
})

.then(weatherResponse => {
    const temp = weatherResponse.data.main.temp;
    const city = weatherResponse.data.name;
    const condition = weatherResponse.data.weather[0].main;

    console.log(condition);

    logo.innerText = icons[condition];
   
    weather.innerHTML = `${temp}&deg; C`;
    cityName.innerText = city;
    
})

.catch(error => {
    console.log(error);
    
})

// date and time
const time = document.querySelector('#dateTime h1');

setInterval(() => {
    time.innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)


// quote
const quoteUrl = 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
const quote = document.querySelector('#quoteText');
const author = document.querySelector('#quoteAuthor')

axios ({
    method:'get',
    url:quoteUrl
})

.then(quoteResponse => {
    const quoteText = quoteResponse.data.quoteText;
    const quoteAuthor = quoteResponse.data.quoteAuthor;

    quote.innerText = quoteText;
    author.innerText = quoteAuthor;
    
})

.catch(error =>{
    console.log(error);
    
})


