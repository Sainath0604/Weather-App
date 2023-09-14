import { useEffect, useState } from "react";
import { SearchIcon } from "../Icons/Icons";
import { getAPI } from "../utility/getAPI";

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
      <div>
        {data &&
          data
            .filter((item) =>
              item.name.toLowerCase().includes(input.toLowerCase())
            )
            .map((item) => (
              <div key={item.coord}>
                <h1>{item.name}</h1>
                <h1>{item.main.temp}</h1>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Cities;
