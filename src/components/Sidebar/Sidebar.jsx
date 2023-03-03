import SearchInput from "./SearchInput";
import SidebarHero from "./SidebarHero";

const Sidebar = (props) => {
    return (
        <section className="container w-1/4 border">
            <SearchInput weatherData={props.weatherData} setWeatherData={props.setWeatherData} />
            <SidebarHero />
        </section>
    );
}

export default Sidebar;