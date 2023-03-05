import { Card, CardBody, Image } from '@chakra-ui/react';
import dayjs from 'dayjs';

const HourlyForecast = ({ weatherData, imperial }) => {
    
    const currentHour = dayjs(weatherData[0].location.localtime).get('h');
    const dataArray = weatherData[1].forecastday[0].hour.slice(currentHour, currentHour + 7);

    return (
        <>
            { dataArray.map((hour) => {
                const formattedTime = dayjs(hour.time).format('hA');
                return (
                <Card align='center' variant='elevated' width='full' key={dayjs(hour.time).get('h')}>
                    <CardBody>
                        <p className='text-center'>{formattedTime}</p>
                        <Image src={hour.condition.icon} alt={hour.condition.text} />

                        { imperial ? (
                            <p className='text-center'>{Math.round(hour.temp_f)}°</p>
                        ) : (
                            <p className='text-center'>{Math.round(hour.temp_c)}°</p>
                        )}
                    </CardBody>
                </Card>
                );
            })}
        </>
    );
}

export default HourlyForecast;