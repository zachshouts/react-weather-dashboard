import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Sidebar, Main } from './components';
import { useState } from 'react';

function App() {

  const [ weatherData, setWeatherData ] = useState([{}, {}]);

  return (
    <ChakraProvider>
      <div className="App container-fluid">
        <div className='row flex'>
          <Sidebar weatherData={weatherData} setWeatherData={setWeatherData} />
          <Main />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

// Link back weatherapi in footer
