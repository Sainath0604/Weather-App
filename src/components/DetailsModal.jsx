import PropTypes from "prop-types";
import { CrossIcon, WindIcon } from "../Icons/Icons";
import Haze from "../Images/Haze.png";
import Clear from "../Images/Clear.png";
import Clouds from "../Images/Clouds.png";
import Rain from "../Images/Rain.png";
import Thunderstorm from "../Images/Thunderstorm.png";
import { useDispatch } from "react-redux";
import { addToFav, emptyFav } from "../toolkit/Reducer";
import { useEffect } from "react";

function DetailsModal({
  id,
  name,
  temp,
  desc,
  humidity,
  wind,
  maxTemp,
  minTemp,
  seaLevel,
  feelsLike,
  main,
  pressure,
  onCancel,
}) {
  const dispatch = useDispatch();

  const handleCancel = () => {
    onCancel();
  };

  function handleAddToFav() {
    try {
      dispatch(
        addToFav({
          id: id,
          name: name,
          temp: temp,
          desc: desc,
          humidity: humidity,
          wind: wind,
          maxTemp: maxTemp,
          minTemp: minTemp,
          seaLevel: seaLevel,
          feelsLike: feelsLike,
          main: main,
          pressure: pressure,
        })
      );

      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push({
        id: id,
        name: name,
        temp: temp,
        desc: desc,
        humidity: humidity,
        wind: wind,
        maxTemp: maxTemp,
        minTemp: minTemp,
        seaLevel: seaLevel,
        feelsLike: feelsLike,
        main: main,
        pressure: pressure,
      });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.length > 0) {
      dispatch(emptyFav());
      favorites.forEach((favorite) => dispatch(addToFav(favorite)));
    }
  }, []);
  return (
    <div className="flex flex-col rounded-lg p-2 bg-gradient-to-r from-emerald-400/75 to-emerald-200/75">
      <div className="flex justify-end pr-2 pt-2">
        <button
          className="h-7 w-7 hover:bg-emerald-300 rounded-full p-[6px]"
          onClick={handleCancel}
        >
          <CrossIcon />
        </button>
      </div>
      <div className="px-16 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <button className="mr-2 text-xl font-bold">
              {name.toUpperCase()}-
            </button>

            <span>Current weather</span>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              {main === "Haze" && (
                <img className="w-16" src={Haze} alt={main} />
              )}
              {main === "Rain" && (
                <img className="w-16" src={Rain} alt={main} />
              )}
              {main === "Clear" && (
                <img className="w-16" src={Clear} alt={main} />
              )}
              {main === "Thunderstorm" && (
                <img className="w-16" src={Thunderstorm} alt={main} />
              )}
              {main === "Clouds" && (
                <img className="w-16" src={Clouds} alt={main} />
              )}
              {!["Haze", "Rain", "Clear", "Thunderstorm", "Clouds"].includes(
                main
              ) && <img className="w-16" src={Haze} alt={main} />}
            </div>
            <div>
              <div>
                <span className="text-3xl">{(temp - 273.15).toFixed(2)}</span>
                <sup className="text-2xl">°</sup>
                <span className="text-3xl">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold capitalize">{desc}</span>
              <div className="text-base">
                <span className="mr-2">Feels Like</span>
                <span>{(feelsLike - 273.15).toFixed(2)}°</span>
              </div>
            </div>
          </div>
          <div>
            <ul className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 gap-y-4">
              <li className="flex flex-col">
                <span>Wind</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <WindIcon />
                  </span>
                  <span>{Math.round(wind * 3.6)} km/h</span>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Humidity</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <WindIcon />
                  </span>
                  <span>{humidity} %</span>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Max Temp.</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <WindIcon />
                  </span>
                  <div>
                    <span className="">{(maxTemp - 273.15).toFixed(2)}</span>
                    <sup className="">°</sup>
                    <span>C</span>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Min Temp.</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <WindIcon />
                  </span>
                  <div>
                    <span className="">{(minTemp - 273.15).toFixed(2)}</span>
                    <sup className="">°</sup>
                    <span>C</span>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Pressure</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <WindIcon />
                  </span>
                  <span>{pressure} mb</span>
                </div>
              </li>
              {seaLevel && (
                <li className="flex flex-col">
                  <span>Sea Level</span>
                  <div className="flex gap-1 items-center">
                    <span>
                      <WindIcon />
                    </span>
                    <span>{seaLevel} </span>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="pt-4">
            <button
              className="border border-rose-800 bg-rose-600 text-white rounded-lg px-3 py-[5px]"
              onClick={handleAddToFav}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
DetailsModal.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  desc: PropTypes.string,
  temp: PropTypes.number,
  maxTemp: PropTypes.number,
  minTemp: PropTypes.number,
  feelsLike: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  seaLevel: PropTypes.number,
  pressure: PropTypes.number,
  main: PropTypes.string,
  onCancel: PropTypes.func,
};
export default DetailsModal;
