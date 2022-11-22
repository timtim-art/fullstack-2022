import axios from 'axios'

const Weather = ( {capital} ) => {

    const apikey = process.env.REACT_APP_API_KEY

    const params = {
        q: capital,
        appid: apikey
      }

 
    return (
        <div>
            {
    axios
    .get('http://api.openweathermap.org/data/2.5/weather', {params})
    .then(response => response.data.main.temp)}
        </div>

    )
  
    
    
}

export default Weather