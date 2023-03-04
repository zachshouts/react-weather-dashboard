import SearchInput from "./SearchInput";
import SidebarHero from "./SidebarHero";
import { Spinner } from '@chakra-ui/react';

const Sidebar = (props) => {

    return (
        <section className="container w-1/4">
            <SearchInput weatherData={props.weatherData} setWeatherData={props.setWeatherData} ready={props.ready} setReady={props.setReady} />

            { !props.ready ? (
                <Spinner />
            ) : (
                <SidebarHero weatherData={props.weatherData} />
            )}
        </section>
    );
}

export default Sidebar;