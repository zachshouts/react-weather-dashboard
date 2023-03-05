import { WiSunset, WiSunrise } from 'react-icons/wi';

const SunCard = (props) => {

    return (
        <>
            <div className='card bg-white w-full rounded-2xl drop-shadow-md min-h-full'>
                <div className='row'>
                    <p className='text-xl text-text-secondary pl-4 xl:pl-7 py-5' style={{textDecoration: 'underline'}}>{props.title}</p>
                </div>
                <div className='row flex justify-center sm:justify-start'>
                    <p className='text-2xl pl-4 xl:pl-7 py-5'>🌝 {props.sunrise}</p>

                </div>
                <div className='row flex justify-center sm:justify-start'>
                    <p className='text-2xl pl-4 xl:pl-7 py-5'>🌚 {props.sunset}</p>
                </div>
            </div>
        </>
    );
}

export default SunCard;