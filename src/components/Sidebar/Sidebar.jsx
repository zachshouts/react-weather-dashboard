import SearchInput from "./SearchInput";
import SidebarHero from "./SidebarHero";

const Sidebar = (props) => {

    return (
        <section className="container w-1/4">
            <SearchInput weatherData={props.weatherData} setWeatherData={props.setWeatherData} ready={props.ready} setReady={props.setReady} />

            { !props.ready ? (
                <></>
            ) : (
                <SidebarHero weatherData={props.weatherData} />
            )}
        </section>
    );
}

export default Sidebar;