import { Input, Button, Select } from '@chakra-ui/react';
import { BiSearchAlt, BiCurrentLocation } from 'react-icons/bi';
import { useState } from 'react';

const SearchInput = ({weatherData, setWeatherData}) => {

    const [ search, setSearch ] = useState('');

    const fetchCityCoords = async () => {
        const cityUrl = `https://api.opencagedata.com/geocode/v1/json?q=${search}&key=454c8c56cbd84e5ab08d61f1691a0eff`;
        let lat;
        let lon;

        const city = await fetch(cityUrl);
        const cityData = await city.json();
        lat = cityData.results[0].geometry.lat;
        lon = cityData.results[0].geometry.lng;

        fetchWeatherData(lon, lat);
    }

    const fetchWeatherData = async (lon, lat) => {
        const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=55b574bd100b4298b6221213230303`;
        const currentWeather = await fetch(currentWeatherUrl);
        const currentWeatherData = await currentWeather.json();
        console.log(currentWeatherData);
        const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?q=${lat},${lon}&days=5&key=55b574bd100b4298b6221213230303`;
        const forecast = await fetch(forecastUrl);
        const forecastData = await forecast.json();
        console.log(forecastData);
    }

    const handleSearch = () => {
        fetchCityCoords(search);
    }

    return (
        <div className='row flex justify-center items-center mt-8'>
            <Button type='button' variant='ghost' borderRadius='full' onClick={handleSearch}><BiSearchAlt /></Button>
            <Input placeholder='Search for places...' value={search} name='search' variant='unstyled' width='xs' onChange={(e) => setSearch(e.target.value)}/>
            <Button size='sm' type='button' borderRadius='full' disabled><BiCurrentLocation /></Button> 
        </div>
    );
}

export default SearchInput;