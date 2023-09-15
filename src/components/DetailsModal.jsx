import PropTypes from "prop-types";
import {
  CrossIcon,
  FavoritesIcon,
  HighTempIcon,
  HumidityIcon,
  LowTempIcon,
  PressureIcon,
  WaveIcon,
  WindIcon,
} from "../Icons/Icons";
import Haze from "../Images/Haze.png";
import Clear from "../Images/Clear.png";
import Clouds from "../Images/Clouds.png";
import Rain from "../Images/Rain.png";
import Thunderstorm from "../Images/Thunderstorm.png";
import { useDispatch } from "react-redux";
import { addToFav, emptyFav } from "../toolkit/Reducer";
import { useEffect, useRef, useState } from "react";
import * as Toast from "@radix-ui/react-toast";

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

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  return (
    <div className="flex flex-col rounded-xl px-4 py-6 text-base">
      <div className="px-2 lg:px-10 py-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 lg:flex-row-reverse justify-between">
            <div className="flex w-full justify-end">
              <button
                className="h-8 w-8 hover:bg-blue-400 rounded-full p-[6px]"
                onClick={handleCancel}
              >
                <CrossIcon />
              </button>
            </div>
            <div className="flex items-center lg:w-full">
              <button className="mr-2 text-2xl font-bold">
                {name.toUpperCase()}-
              </button>
              <span>Current weather</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center lg:mt-6">
            <div className="flex flex-col lg:items-center lg:gap-4 lg:flex-row gap-2">
              <div className="w-full flex justify-center lg:justify-start">
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
            <ul className="grid grid-cols-2 gap-x-4 lg:grid-cols-5 lg:gap-x-8 gap-y-4 px-8 lg:px-0 text-lg">
              <li className="flex flex-col">
                <span>Wind</span>
                <div className="flex gap-1 items-center font-semibold">
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
                    <HumidityIcon />
                  </span>
                  <span className="font-semibold">{humidity} %</span>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Max Temp.</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <HighTempIcon />
                  </span>
                  <div>
                    <span className="font-semibold">
                      {(maxTemp - 273.15).toFixed(2)}
                    </span>
                    <sup className="font-semibold">°</sup>
                    <span className="font-semibold">C</span>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Min Temp.</span>
                <div className="flex gap-1 items-center">
                  <span>
                    <LowTempIcon />
                  </span>
                  <div>
                    <span className="font-semibold">
                      {(minTemp - 273.15).toFixed(2)}
                    </span>
                    <sup className="font-semibold">°</sup>
                    <span className="font-semibold">C</span>
                  </div>
                </div>
              </li>
              <li className="flex flex-col">
                <span>Pressure</span>
                <div className="flex gap-1 items-center font-semibold">
                  <span>
                    <PressureIcon />
                  </span>
                  <span>{pressure} mb</span>
                </div>
              </li>
              {seaLevel && (
                <li className="flex flex-col">
                  <span>Sea Level</span>
                  <div className="flex gap-1 items-center font-semibold">
                    <span>
                      <WaveIcon />
                    </span>
                    <span>{seaLevel} MSL</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Toast.Provider swipeDirection="right">
              <button
                className="border border-blue-600 bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 py-[5px] flex gap-2 items-center"
                onClick={() => {
                  setOpen(false);
                  window.clearTimeout(timerRef.current);
                  timerRef.current = window.setTimeout(() => {
                    setOpen(true);
                  }, 100);
                  handleAddToFav();
                }}
              >
                <span>
                  <FavoritesIcon />
                </span>
                <span>Add to Favorites</span>
              </button>
              <Toast.Root
                duration={2000}
                className="bg-gray-300 text-black text-xl font-semibold rounded-lg px-6 py-4 shadow-sm shadow-black fixed top-5 right-5 lg:top-10 lg:right-28 max-w-xs"
                open={open}
                onOpenChange={setOpen}
              >
                <Toast.Title className="ToastTitle">
                  Added to favorites
                </Toast.Title>
              </Toast.Root>
              <Toast.Viewport className="ToastViewport" />
            </Toast.Provider>
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
