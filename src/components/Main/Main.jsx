import MainNav from './MainNav';
import SevenDay from './SevenDay';
import HourlyForecast from './HourlyForecast';
import { BasicCard, UVCard, SunCard } from './cards';
import { useState } from 'react';


const Main = ({weatherData, imperial, setImperial}) => {

    const [ defaultView, setDefaultView ] = useState(false);

    return (
        <section className="container w-3/4 bg-body min-h-screen">
            <>
                <div className="row flex mt-8 mx-24 justify-between">
                    <MainNav defaultView={defaultView} setDefaultView={setDefaultView} imperial={imperial} setImperial={setImperial} />
                </div>

                <div className='row flex mt-16 mx-24 justify-between gap-10'>
                   { defaultView ? (
                    <SevenDay weatherData={weatherData[1].forecastday} imperial={imperial} />
                   ) : (
                    <HourlyForecast weatherData={weatherData} imperial={imperial} />
                   )}
                </div>

                <div className='row mt-20 mx-24'>
                    <p className='text-xl font-semibold'>Today's Highlights</p>
                </div>

                <div className='row mt-12 mx-24'>
                    <div className='container grid grid-cols-3 gap-10'>
                        <div className=''>
                            <UVCard title='UV Index' value={weatherData[0].current.uv} />
                        </div>
                        <div className=''>
                            <BasicCard title='Wind Status' value={imperial ? weatherData[0].current.wind_mph : weatherData[0].current.wind_kph} unit={imperial ? 'mph' : 'km/h'} message={weatherData[0].current.wind_dir} />
                        </div>
                        <div className=''>
                            <SunCard title='Sunrise & Sunset' sunrise={weatherData[1].forecastday[0].astro.sunrise} sunset={weatherData[1].forecastday[0].astro.sunset} />
                        </div>
                        <div className=''>
                            <BasicCard title='Humidity' value={weatherData[0].current.humidity} unit={'%'} message={weatherData[0].current.humidity < 50 ? 'Awesome 👍' : 'Could be worse 👎'} />
                        </div>
                        <div className=''>
                            <BasicCard title='Visibility' value={imperial ? weatherData[0].current.vis_miles : weatherData[0].current.vis_km} unit={imperial ? 'mi' : 'km'} message={imperial ? weatherData[0].current.vis_miles < 3 ? 'Helen Keller 👓' : 'Good to go 👀' : weatherData[0].current.vis_km < 4.8 ? 'Helen Keller 👓' : 'Good to go 👀'} />
                        </div>
                        <div className=''>
                            <BasicCard title='Feels Like' value={imperial ? Math.round(weatherData[0].current.feelslike_f) : Math.round(weatherData[0].current.feelslike_c)} unit={imperial ? '°F' : '°C'} message={imperial ? Math.round(weatherData[0].current.feelslike_f) < 32 ? 'Brrrrr ⛄️' : 'Sun Bathing? 🌞' : Math.round(weatherData[0].current.feelslike_c) < 0 ? 'Brrrrr ⛄️' : 'Sun Bathing? 🌞'}/>
                        </div>

                    </div>
                </div>
            </>
        </section>
    );
}

export default Main;