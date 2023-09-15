import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Haze from "../Images/Haze.png";
import Clear from "../Images/Clear.png";
import Clouds from "../Images/Clouds.png";
import Rain from "../Images/Rain.png";
import Thunderstorm from "../Images/Thunderstorm.png";
import FavModal from "./FavModal";
import { removeFromFav } from "../toolkit/Reducer";
import { CrossIcon } from "../Icons/Icons";

function Favorites() {
  const favorite = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();
  const favoriteLength = favorite.length;

  function handleDelete(id) {
    try {
      dispatch(removeFromFav(id));
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favorites.filter(
        (favorites) => favorites.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log("removed");
    } catch (error) {
      console.log("failed to remove");
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div className="p-6 lg:p-5">
      {favoriteLength === 0 ? (
        <div className="flex flex-col gap-8 p-2">
          <h1 className="text-center text-red-700 font-bold text-3xl">
            Favorites
          </h1>
          <h1 className="font-semibold text-xl">No favorite added yet.</h1>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-2 justify-center">
          <h1 className="text-center text-red-700 font-bold text-3xl">
            Favorites
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-5 py-4 px-16">
            {favorite.map((item) => (
              <div
                className="border bg-gradient-to-r from-emerald-400/75 to-emerald-200/75 outline outline-emerald-600 px-6 py-4 rounded-lg  shadow-md shadow-emerald-800 transition ease-in-out hover:-translate-y-[2px] hover:scale-100 hover:shadow-emerald-300/50"
                key={item.id}
              >
                <div>
                  <div className="flex justify-end">
                    <button
                      className="h-7 w-7 hover:bg-emerald-300 rounded-full p-[6px]"
                      onClick={() => handleDelete(item.id)}
                    >
                      <CrossIcon />
                    </button>
                  </div>
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
                          <FavModal
                            id={item.id}
                            name={item.name}
                            temp={item.temp}
                            desc={item.desc}
                            humidity={item.humidity}
                            wind={item.wind}
                            maxTemp={item.maxTemp}
                            minTemp={item.minTemp}
                            seaLevel={item.seaLevel}
                            feelsLike={item.feelsLike}
                            pressure={item.pressure}
                            main={item.main}
                            onCancel={close}
                          />
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div>
                      {item.main === "Haze" && (
                        <img className="w-16" src={Haze} alt={item.main} />
                      )}
                      {item.main === "Rain" && (
                        <img className="w-16" src={Rain} alt={item.main} />
                      )}
                      {item.main === "Clear" && (
                        <img className="w-16" src={Clear} alt={item.main} />
                      )}
                      {item.main === "Thunderstorm" && (
                        <img
                          className="w-16"
                          src={Thunderstorm}
                          alt={item.main}
                        />
                      )}
                      {item.main === "Clouds" && (
                        <img className="w-16" src={Clouds} alt={item.main} />
                      )}
                      {![
                        "Haze",
                        "Rain",
                        "Clear",
                        "Thunderstorm",
                        "Clouds",
                      ].includes(item.main) && (
                        <img className="w-16" src={Haze} alt={item.main} />
                      )}
                    </div>
                    <div>
                      <div>
                        <span className="text-3xl">
                          {(item.temp - 273.15).toFixed(2)}
                        </span>
                        <sup className="text-2xl">°</sup>
                        <span className="text-3xl">C</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold capitalize">
                        {item.desc}
                      </span>
                      <div className="text-base">
                        <span className="mr-2">Feels Like</span>
                        <span>{(item.feelsLike - 273.15).toFixed(2)}°</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
