import { HomeIcon, FavoritesIcon } from "../Icons/Icons";
import PropTypes from "prop-types";

function SmSidebar({ activeComponent, handleComponentChange }) {
  return (
    <>
      <div className="mt-5 pb-8">
        <div className="text-sm lg:text-xs flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 px-4">
              <ul className="flex flex-col gap-2 text-base font-semibold">
                <li
                  className={`flex transition-colors duration-150 items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer ${
                    activeComponent === "Cities"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                  onClick={() => handleComponentChange("Cities")}
                >
                  <span className="text-xl">
                    <HomeIcon />
                  </span>
                  <span className="">Home</span>
                </li>

                <li
                  className={`flex transition-colors duration-150 items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer ${
                    activeComponent === "Favorites"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                  onClick={() => handleComponentChange("Favorites")}
                >
                  <span className="text-xl">
                    <FavoritesIcon />
                  </span>
                  <span className="">Favorites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
SmSidebar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  handleComponentChange: PropTypes.func.isRequired,
};
export default SmSidebar;
