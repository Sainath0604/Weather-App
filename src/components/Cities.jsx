import { useEffect, useState } from "react";
import { SearchIcon } from "../Icons/Icons";
import { getAPI } from "../utility/getAPI";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import DetailsModal from "./DetailsModal";
import Haze from "../Images/Haze.png";
import Clear from "../Images/Clear.png";
import Clouds from "../Images/Clouds.png";
import Rain from "../Images/Rain.png";
import Thunderstorm from "../Images/Thunderstorm.png";

function Cities() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const weatherDataArray = await getAPI();
      setData(weatherDataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div
        id="Searchbar"
        className="flex items-center gap-2 lg:h-16 bg-[#eb5356] shadow-md p-2 lg:items-center md:px-10"
      >
        <span className="text-white p-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          name="Searchbar"
          placeholder="Search cities"
          className="p-2 bg-[#eb5356] text-white placeholder:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-5 py-4 px-16">
        {data &&
          data
            .filter((item) =>
              item.name.toLowerCase().includes(input.toLowerCase())
            )
            .map((item) => (
              <div
                className="border bg-gradient-to-r from-emerald-400/75 to-emerald-200/75 outline outline-emerald-600 px-6 py-4 rounded-lg  shadow-md shadow-emerald-800 transition ease-in-out hover:-translate-y-[2px] hover:scale-100 hover:shadow-emerald-300/50"
                key={item.id}
              >
                <div>
                  <div className="flex items-center">
                    <Popup
                      trigger={
                        <button className="mr-2 text-xl font-semibold hover:font-bold">
                          {item.name.toUpperCase()}
                        </button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div>
                          <DetailsModal
                            id={item.id}
                            name={item.name}
                            temp={item.main.temp}
                            desc={item.weather[0].description}
                            humidity={item.main.humidity}
                            wind={item.wind.speed}
                            maxTemp={item.main.temp_max}
                            minTemp={item.main.temp_min}
                            seaLevel={item.main.sea_level}
                            feelsLike={item.main.feels_like}
                            pressure={item.main.pressure}
                            main={item.weather[0].main}
                            onCancel={close}
                          />
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div>
                      {item.weather[0].main === "Haze" && (
                        <img
                          className="w-16"
                          src={Haze}
                          alt={item.weather[0].main}
                        />
                      )}
                      {item.weather[0].main === "Rain" && (
                        <img
                          className="w-16"
                          src={Rain}
                          alt={item.weather[0].main}
                        />
                      )}
                      {item.weather[0].main === "Clear" && (
                        <img
                          className="w-16"
                          src={Clear}
                          alt={item.weather[0].main}
                        />
                      )}
                      {item.weather[0].main === "Thunderstorm" && (
                        <img
                          className="w-16"
                          src={Thunderstorm}
                          alt={item.weather[0].main}
                        />
                      )}
                      {item.weather[0].main === "Clouds" && (
                        <img
                          className="w-16"
                          src={Clouds}
                          alt={item.weather[0].main}
                        />
                      )}
                      {![
                        "Haze",
                        "Rain",
                        "Clear",
                        "Thunderstorm",
                        "Clouds",
                      ].includes(item.weather[0].main) && (
                        <img
                          className="w-16"
                          src={Haze}
                          alt={item.weather[0].main}
                        />
                      )}
                    </div>
                    <div>
                      <div>
                        <span className="text-3xl">
                          {(item.main.temp - 273.15).toFixed(2)}
                        </span>
                        <sup className="text-2xl">°</sup>
                        <span className="text-3xl">C</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold capitalize">
                        {item.weather[0].description}
                      </span>
                      <div className="text-base">
                        <span className="mr-2">Feels Like</span>
                        <span>
                          {(item.main.feels_like - 273.15).toFixed(2)}°
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
export default Cities;
