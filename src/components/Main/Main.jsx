import MainNav from './MainNav';
import SevenDay from './SevenDay';
import HourlyForecast from './HourlyForecast';
import { useState } from 'react';


const Main = ({weatherData, ready}) => {

    const [ defaultView, setDefaultView ] = useState(false);


    return (
        <section className="container w-3/4 border bg-body">
            <>
                <div className="row flex mt-8 mx-16 justify-between">
                    <MainNav defaultView={defaultView} setDefaultView={setDefaultView} />
                </div>

                <div className='row flex mt-16 mx-16 justify-between gap-10'>
                   { defaultView ? (
                    <SevenDay weatherData={weatherData[1].forecastday} />
                   ) : (
                    <HourlyForecast weatherData={weatherData}/>
                   )}
                </div>
            </>
        </section>
    );
}

export default Main;