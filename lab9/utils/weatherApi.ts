import { WEATHER_API_KEY } from "../keys";

export const fetchWeather = async (query: string) => {
   const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${query}&aqi=no`;

   const res = await fetch(url);
   return res.json();
};
