import { Image } from '@chakra-ui/react';
import dayjs from 'dayjs';

const SidebarHero = ({weatherData}) => {
    
    // Api returns 64x64 icons so I'm splitting so I can specify 128x128 in the url and still grab the icon code
    const iconUrl = weatherData[0].current.condition.icon.split('64/')[1];
    const formattedDate = dayjs(weatherData[0].current.last_updated).format('dddd, H:mm').split(', ');
    return (
        <>
            <div className="row flex justify-center mt-12">
                <Image src={`//cdn.weatherapi.com/weather/128x128/${iconUrl}`} alt={weatherData[0].current.condition.text} boxSize='256px' />
            </div>

            <div className='row flex justify-center p-10'>
                <p className='text-8xl'>{Math.round(weatherData[0].current.temp_f)}°<span className='text-5xl align-top leading-normal font-semibold'>F</span></p>
            </div>

            <div className='row flex justify-center px-10'>
                <p className='text-2xl'>{formattedDate[0]}, <span className='text-text-secondary'>{formattedDate[1]}</span></p>
            </div>

            <hr className='mx-auto h-1 w-2/3 mt-12 mb-6'/>

            <div className='row flex ml-12 pl-8 items-center gap-4'>
                <Image src='//cdn.weatherapi.com/weather/64x64/day/122.png' alt='Cloud' />
                <p className=''>Cloud Coverage - {weatherData[0].current.cloud}%</p>
            </div>
            
            <div className='row flex ml-12 pl-8 items-center gap-4'>
                <Image src='//cdn.weatherapi.com/weather/64x64/day/296.png' alt='Cloud' />
                <p className=''>Rain - {weatherData[1].forecastday[0].day.daily_chance_of_rain}%</p>
            </div>
            
            <div className='row flex ml-12 pl-8 items-center gap-4'>
                <Image src='//cdn.weatherapi.com/weather/64x64/day/326.png' alt='Cloud' />
                <p className=''>Snow - {weatherData[1].forecastday[0].day.daily_chance_of_snow}%</p>
            </div>

            <div className='row flex ml-12 pl-10 mt-4'>
                <p className='text-3xl font-semibold'>{weatherData[0].location.name}, {weatherData[0].location.region}</p>
            </div>
        </>
    );
}

export default SidebarHero;