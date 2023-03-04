import MainNav from './MainNav';
import SevenDay from './SevenDay';
import HourlyForecast from './HourlyForecast';
import HighlightCardOne from './HighlightCardOne';
import { BasicCard, UVCard, SunCard } from './cards';
import { useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';


const Main = ({weatherData}) => {

    const [ defaultView, setDefaultView ] = useState(false);

    return (
        <section className="container w-3/4 bg-body min-h-screen">
            <>
                <div className="row flex mt-8 mx-24 justify-between">
                    <MainNav defaultView={defaultView} setDefaultView={setDefaultView} />
                </div>

                <div className='row flex mt-16 mx-24 justify-between gap-10'>
                   { defaultView ? (
                    <SevenDay weatherData={weatherData[1].forecastday} />
                   ) : (
                    <HourlyForecast weatherData={weatherData}/>
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
                            {/* <HighlightCardOne data={{title: 'Wind Status', value: weatherData[0].current.wind_mph, slider: false }} windDirection={weatherData[0].current.wind_dir} /> */}
                            <BasicCard title='Wind Status' value={weatherData[0].current.wind_mph} unit={'mph'} message={weatherData[0].current.wind_dir} />
                        </div>
                        <div className=''>
                            {/* <HighlightCardOne data={{title: 'Sunrise and Sunset', value: weatherData[1].forecastday[0].day.uv, slider: true }}/> */}
                            <SunCard title='Sunrise & Sunset' sunrise={weatherData[1].forecastday[0].astro.sunrise} sunset={weatherData[1].forecastday[0].astro.sunset} />
                        </div>
                        <div className=''>
                            {/* <HighlightCardOne data={{title: 'UV Index', value: weatherData[1].forecastday[0].day.uv, slider: true }}/> */}
                            <BasicCard title='Humidity' value={weatherData[0].current.humidity} unit={'%'} message={weatherData[0].current.humidity < 50 ? 'Awesome 👍' : 'Could be worse 👎'} />
                        </div>
                        <div className=''>
                            {/* <HighlightCardOne data={{title: 'UV Index', value: weatherData[1].forecastday[0].day.uv, slider: true }}/> */}
                            <BasicCard title='Visibility' value={weatherData[0].current.vis_miles} unit={'mi'} message={weatherData[0].current.vis_miles < 3 ? 'Helen Keller 👓' : 'Good to go 👀'} />
                        </div>
                        <div className=''>
                            {/* <HighlightCardOne data={{title: 'UV Index', value: weatherData[1].forecastday[0].day.uv, slider: true }}/> */}
                            <BasicCard title='Feels Like' value={Math.round(weatherData[0].current.feelslike_f)} unit={'°F'} message={Math.round(weatherData[0].current.feelslike_f) < 32 ? 'Brrrrr ⛄️' : 'Sun Bathing? 🌞'}/>
                        </div>

                    </div>
                </div>
            </>
        </section>
    );
}

export default Main;