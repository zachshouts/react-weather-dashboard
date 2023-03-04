import { Tabs, TabList, Tab, Button, textDecoration } from '@chakra-ui/react';

const MainNav = ({ defaultView, setDefaultView }) => {

    return (
        <>
            <div className='flex gap-3 items-center'>
                <Button variant='link' _hover={{ color: 'black'}} _active={{ color: 'black'}} _focus={{ color: 'black'}} onClick={() => setDefaultView(false)}>Today</Button>
                <Button variant='link' _hover={{ color: 'black'}} _active={{ color: 'black'}} _focus={{ color: 'black'}} onClick={() => setDefaultView(true)}>Week</Button>
            </div>
            <div className='flex gap-2 items-center'>
                <Button borderRadius='full' size='sm' disabled>°C</Button>
                <Button borderRadius='full' backgroundColor='black' color='white' size='sm'>°F</Button>
            </div>
        </>
    );
}

export default MainNav;