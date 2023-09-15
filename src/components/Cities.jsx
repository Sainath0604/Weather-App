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
import { Oval } from "react-loader-spinner";

function Cities() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const weatherDataArray = await getAPI();
      setData(weatherDataArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching loader:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        id="Searchbar"
        className="flex items-center gap-2 py-4 lg:items-center px-2 md:px-16"
      >
        <div className="flex w-full max-w-sm gap-2 items-center border border-zinc-600/30 px-4 py-1 rounded-lg focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="p-2">
            <SearchIcon />
          </span>
          <input
            type="text"
            name="Searchbar"
            placeholder="Search cities"
            className="p-2 bg-zinc-100 outline-none w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex justify-center">
            <Oval
              height={100}
              width={100}
              color="#4070cf"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4070cf"
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-5 py-4 px-2 md:px-16 md:mt-12">
          {data &&
            data
              .filter((item) =>
                item.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((item) => (
                <button
                  className="border border-blue-600/25 rounded-lg p-4 bg-white hover:shadow-md transition-all duration-200 hover:scale-[1.05]"
                  key={item.id}
                >
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
                </button>
              ))}
        </div>
      )}
    </>
  );
}
export default Cities;
