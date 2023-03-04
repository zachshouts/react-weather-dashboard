import { Spinner } from '@chakra-ui/react';


const PageLoad = () => {
    return (
        <section className='container grid grid-cols-3 justify-items-end items-center h-screen'>
            
            <Spinner className='' size='xl' speed='.7s'/>
            
        </section>
    );
}

export default PageLoad;