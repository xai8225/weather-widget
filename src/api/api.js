const KEY = '534eeb133c09d8eef0cf161b7ca975d3';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

const getRequestURL = (nameString) => {
    const nameUrl = encodeURIComponent(nameString);
    return `${WEATHER_API_URL}${nameUrl}&units=metric&APPID=${KEY}`
}

export default getRequestURL