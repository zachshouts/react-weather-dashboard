
  import { Card, CardBody, Image } from '@chakra-ui/react';
  import dayjs from 'dayjs';

const SevenDay = ({ weatherData }) => {

    // console.log(weatherData);


    return (
        <>
            { weatherData.map((day) => {
                const formattedDate = dayjs(day.date).format('ddd');
                return (
                <Card align='center' variant='elevated' height='fit-content' width='full' key={formattedDate}>
                    <CardBody>
                        <p className='text-center'>{formattedDate}</p>
                        <Image src={day.day.condition.icon} alt={day.day.condition.text} />
                        <p className='text-center'>{Math.round(day.day.maxtemp_f)}° <span className='text-text-secondary'>{Math.round(day.day.mintemp_f)}°</span></p>
                    </CardBody>
                </Card>
                )
            })}
        </>
    );
}

export default SevenDay;