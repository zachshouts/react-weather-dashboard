import { Spinner } from '@chakra-ui/react';


const PageLoad = () => {
    return (
        <section className='container flex justify-center items-center lg:grid grid-cols-3 lg:justify-items-end lg:items-center h-screen'>
            
            <Spinner className='' size='xl' speed='.7s'/>
            
        </section>
    );
}

export default PageLoad;