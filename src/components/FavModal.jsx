import PropTypes from "prop-types";
import {
  CrossIcon,
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

function FavModal({
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
  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="flex flex-col rounded-lg p-2">
      <div className="flex justify-end pr-2 pt-2">
        <button
          className="h-8 w-8 hover:bg-blue-400 rounded-full p-[6px]"
          onClick={handleCancel}
        >
          <CrossIcon />
        </button>
      </div>
      <div className="px-2 md:px-10 py-4 md:pb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <button className="mr-2 text-xl font-bold">
              {name.toUpperCase()}-
            </button>

            <span>Current weather</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
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
                <div>
                  <span className="text-3xl">{(temp - 273.15).toFixed(2)}</span>
                  <sup className="text-2xl">°</sup>
                  <span className="text-3xl">C</span>
                </div>
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
        </div>
      </div>
    </div>
  );
}
FavModal.propTypes = {
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
export default FavModal;
