import { Spinner } from '@chakra-ui/react';


const PageLoad = () => {
    return (
        <section className='container flex justify-center items-center lg:grid grid-cols-2 lg:justify-items-end lg:items-center h-screen'>
            <div className='text-center'>
                <p className='mb-3 text-xl'>Search For Your City...</p>
                <Spinner label='Loading...' size='xl' speed='.7s'/>
            </div>
        </section>
    );
}

export default PageLoad;