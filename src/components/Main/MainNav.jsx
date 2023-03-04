import { Button } from '@chakra-ui/react';

const MainNav = ({ setDefaultView, imperial, setImperial }) => {

    return (
        <>
            <div className='flex gap-3 items-center'>
                <Button variant='link' _hover={{ color: 'black'}} _active={{ color: 'black'}} _focus={{ color: 'black'}} onClick={() => setDefaultView(false)}>Today</Button>
                <Button variant='link' _hover={{ color: 'black'}} _active={{ color: 'black'}} _focus={{ color: 'black'}} onClick={() => setDefaultView(true)}>Week</Button>
            </div>
            <div className='flex gap-2 items-center'>
                <Button borderRadius='full' backgroundColor={!imperial ? 'black' : 'white'} color={!imperial ? 'white' : 'black'}size='sm' onClick={() => setImperial(false)}>°C</Button>
                <Button borderRadius='full' backgroundColor={imperial ? 'black' : 'white'} color={imperial ? 'white' : 'black'} size='sm' onClick={() => setImperial(true)}>°F</Button>
            </div>
        </>
    );
}

export default MainNav;