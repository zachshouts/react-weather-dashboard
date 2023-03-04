import { Spinner } from '@chakra-ui/react';


const PageLoad = () => {
    return (
        <section className='container flex justify-center items-center h-screen'>
            <Spinner size='xl' speed='.7s'/>
        </section>
    );
}

export default PageLoad;