import { Input, Button } from '@chakra-ui/react';
import { BiSearchAlt, BiCurrentLocation } from 'react-icons/bi';
import { useState } from 'react';

const SearchInput = ({ setWeatherData, setReady }) => {

    const [ search, setSearch ] = useState('');

    const fetchCityCoords = async () => {
        const cityUrl = `https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${process.env.REACT_APP_OPENCAGE_API}`;
        let lat;
        let lon;

        const city = await fetch(cityUrl);
        const cityData = await city.json();
        lat = cityData.results[0].geometry.lat;
        lon = cityData.results[0].geometry.lng;

        fetchWeatherData(lon, lat);
    }

    const fetchWeatherData = async (lon, lat) => {
        const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=${process.env.REACT_APP_WEATHER_API}`;
        const currentWeather = await fetch(currentWeatherUrl);
        const currentWeatherData = await currentWeather.json();

        const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?q=${lat},${lon}&days=7&key=${process.env.REACT_APP_WEATHER_API}`;
        const forecast = await fetch(forecastUrl);
        const forecastData = await forecast.json();

        setWeatherData([ currentWeatherData, forecastData.forecast]);
        setReady(true);
    }

    const handleSearch = () => {
        fetchCityCoords();
    }
    
    
    const handleGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handlePosition);
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }
    
    const handlePosition = (position) => {
        fetchWeatherData(position.coords.longitude, position.coords.latitude);
    }
    

    return (
        <div className='row flex justify-center items-center mt-8 mx-12'>
            <Button type='button' variant='ghost' borderRadius='full' onClick={handleSearch}><BiSearchAlt /></Button>
            <Input placeholder='Search for places...' value={search} name='search' variant='unstyled' width='xs' onChange={(e) => { setSearch(e.target.value) }}/>
            <Button size='sm' type='button' borderRadius='full' onClick={() => handleGeolocation()}><BiCurrentLocation /></Button> 
        </div>
    );
}

export default SearchInput;