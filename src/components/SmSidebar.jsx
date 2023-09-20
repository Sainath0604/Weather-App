import { Link } from "react-router-dom";
import { HomeIcon, FavoritesIcon } from "../Icons/Icons";

function SmSidebar() {
  return (
    <>
      <div className="mt-5 pb-8">
        <div className="text-sm lg:text-xs flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 px-4">
              <ul className="flex flex-col gap-2 text-base font-semibold">
                <Link to="/">
                  <li className="flex transition-colors duration-150 items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white">
                    <span className="text-xl">
                      <HomeIcon />
                    </span>
                    <span className="">Home</span>
                  </li>
                </Link>

                <Link to="favorite">
                  <li className="flex transition-colors duration-150 items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white">
                    <span className="text-xl">
                      <FavoritesIcon />
                    </span>
                    <span className="">Favorites</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmSidebar;
