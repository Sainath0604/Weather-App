import Sidebar from "../components/Sidebar";
import Favorites from "../components/Favorites";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="md:w-[15%]">
        <Sidebar />
      </div>
      <div className="border-l border-gray-400 md:w-[85%]">
        <Favorites />
      </div>
    </div>
  );
}

export default Home;
