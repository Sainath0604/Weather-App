import axios from "axios";

export async function getAPI() {
  const apiUrls = [
    "https://api.openweathermap.org/data/2.5/weather?lat=19.2183&lon=72.9781&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=19.0330&lon=73.0297&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=18.516726&lon=73.856255&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=19.997454&lon=73.789803&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=21.170240&lon=72.831062&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=22.3072&lon=73.1812&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=23.0225&lon=72.5714&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=16.9944&lon=73.3002&appid=2b21123e8dca1b4eab8743e5310e51d9",
    "https://api.openweathermap.org/data/2.5/weather?lat=15.2993&lon=74.1240&appid=2b21123e8dca1b4eab8743e5310e51d9",
  ];

  try {
    const responseArray = await Promise.all(
      apiUrls.map((url) => axios.get(url))
    );
    const dataArray = responseArray.map((response) => response.data);
    return dataArray;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
