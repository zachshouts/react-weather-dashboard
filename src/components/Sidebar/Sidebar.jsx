import SearchInput from "./SearchInput";
import SidebarHero from "./SidebarHero";

const Sidebar = (props) => {

    return (
        <section className="container w-full lg:w-2/6 xl:w-1/4">
            <SearchInput weatherData={props.weatherData} setWeatherData={props.setWeatherData} ready={props.ready} setReady={props.setReady} />

            { !props.ready ? (
                <></>
            ) : (
                <SidebarHero weatherData={props.weatherData} imperial={props.imperial} />
            )}
        </section>
    );
}

export default Sidebar;