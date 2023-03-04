import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';


const HighlightCardOne = ({data, slider}) => {
    console.log(data)
    return (
        <>
            <div className='card bg-white w-full rounded-2xl drop-shadow-md'>
                <div className='row'>
                    <p className='text-xl text-text-secondary pl-7 py-5'>{data.title}</p>
                </div>
                <div className='row flex'>
                    <p className='text-4xl pl-7 py-5'>{data.value}</p>

                </div>
                <div className='row'>
                    <p className='text-xl pl-7 py-5'>Average</p>
                </div>
            </div>
        </>
    );
}

export default HighlightCardOne;